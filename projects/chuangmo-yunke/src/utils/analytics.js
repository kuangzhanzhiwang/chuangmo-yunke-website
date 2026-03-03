/**
 * 数据分析工具
 * 支持 Google Analytics, 百度统计等
 */

class Analytics {
  constructor() {
    this.queue = [];
    this.initialized = false;
    this.userId = null;
  }

  /**
   * 初始化分析工具
   */
  init(config = {}) {
    const { googleAnalyticsId, baiduAnalyticsId } = config;

    // Google Analytics
    if (googleAnalyticsId) {
      this.loadScript(`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() { 
        window.dataLayer.push(arguments); 
      };
      window.gtag('js', new Date());
      window.gtag('config', googleAnalyticsId);
    }

    // 百度统计
    if (baiduAnalyticsId) {
      this.loadScript(`https://hm.baidu.com/hm.js?${baiduAnalyticsId}`);
    }

    this.initialized = true;
    this.flushQueue();
  }

  /**
   * 加载外部脚本
   */
  loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  /**
   * 设置用户 ID
   */
  setUserId(id) {
    this.userId = id;
    if (window.gtag) {
      window.gtag('set', 'user_id', id);
    }
  }

  /**
   * 追踪页面浏览
   */
  pageView(path, title) {
    const eventData = {
      event: 'page_view',
      page_path: path,
      page_title: title,
      timestamp: new Date().toISOString()
    };

    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: path,
        page_title: title
      });
    }

    if (window._hmt) {
      window._hmt.push(['_trackPageview', path]);
    }

    console.log('[Analytics] pageView:', eventData);
  }

  /**
   * 追踪事件
   */
  track(eventName, eventData = {}) {
    const fullEventData = {
      ...eventData,
      user_id: this.userId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer
    };

    if (window.gtag) {
      window.gtag('event', eventName, fullEventData);
    }

    if (window._hmt) {
      window._hmt.push(['_trackEvent', eventName, ...Object.values(eventData)]);
    }

    // 如果还未初始化，加入队列
    if (!this.initialized) {
      this.queue.push({ type: 'event', name: eventName, data: fullEventData });
    }

    console.log('[Analytics] track:', eventName, fullEventData);
  }

  /**
   * 追踪点击事件
   */
  trackClick(element, category = 'UI', action = 'click', label = '') {
    this.track('click', {
      category,
      action,
      label: label || element.innerText || element.id,
      element: element.tagName
    });
  }

  /**
   * 追踪表单提交
   */
  trackFormSubmit(formName, success = true) {
    this.track('form_submit', {
      form_name: formName,
      success
    });
  }

  /**
   * 追踪购买事件
   */
  trackPurchase(orderId, amount, currency = 'CNY') {
    this.track('purchase', {
      transaction_id: orderId,
      value: amount,
      currency,
      event_category: 'ecommerce'
    });
  }

  /**
   * 追踪搜索事件
   */
  trackSearch(searchTerm, resultsCount) {
    this.track('search', {
      search_term: searchTerm,
      results_count: resultsCount
    });
  }

  /**
   * 追踪视频播放
   */
  trackVideo(videoId, action, duration = 0) {
    this.track('video', {
      video_id: videoId,
      action, // play, pause, complete
      duration
    });
  }

  /**
   * 设置自定义维度
   */
  setCustomDimension(index, value) {
    if (window.gtag) {
      window.gtag('set', `dimension${index}`, value);
    }
  }

  /**
   * 刷新队列
   */
  flushQueue() {
    this.queue.forEach(item => {
      if (item.type === 'event') {
        this.track(item.name, item.data);
      }
    });
    this.queue = [];
  }
}

// 创建单例
export const analytics = new Analytics();

/**
 * 自动追踪页面浏览
 */
export function autoTrackPageViews() {
  let lastPath = window.location.pathname;
  
  const observer = new MutationObserver(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== lastPath) {
      lastPath = currentPath;
      analytics.pageView(currentPath, document.title);
    }
  });

  observer.observe(document, { 
    subtree: true, 
    childList: true 
  });

  // 初始页面浏览
  analytics.pageView(window.location.pathname, document.title);
}

/**
 * 追踪出站链接点击
 */
export function trackOutboundLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
      analytics.track('outbound_link', {
        url: link.href,
        text: link.innerText
      });
    }
  });
}

export default analytics;
