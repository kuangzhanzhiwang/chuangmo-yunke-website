import React from 'react';

/**
 * 模型卡片骨架屏
 */
export const ModelCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
    <div className="h-48 bg-slate-200" />
    <div className="p-4 space-y-3">
      <div className="h-5 bg-slate-200 rounded w-3/4" />
      <div className="h-4 bg-slate-200 rounded w-1/3" />
      <div className="flex gap-2">
        <div className="h-5 bg-slate-200 rounded w-12" />
        <div className="h-5 bg-slate-200 rounded w-12" />
        <div className="h-5 bg-slate-200 rounded w-12" />
      </div>
      <div className="border-t pt-3 flex justify-between">
        <div className="h-4 bg-slate-200 rounded w-16" />
        <div className="h-8 bg-slate-200 rounded w-8" />
      </div>
    </div>
  </div>
);

/**
 * 帖子卡片骨架屏
 */
export const PostCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
    <div className="p-4 flex gap-3">
      <div className="w-10 h-10 bg-slate-200 rounded-full" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-slate-200 rounded w-1/4" />
        <div className="h-3 bg-slate-200 rounded w-1/6" />
      </div>
    </div>
    <div className="px-4 pb-4 space-y-3">
      <div className="h-5 bg-slate-200 rounded w-3/4" />
      <div className="h-4 bg-slate-200 rounded w-full" />
      <div className="h-4 bg-slate-200 rounded w-2/3" />
    </div>
    <div className="h-64 bg-slate-200" />
    <div className="p-4 flex gap-6">
      <div className="h-5 bg-slate-200 rounded w-12" />
      <div className="h-5 bg-slate-200 rounded w-12" />
      <div className="h-5 bg-slate-200 rounded w-12" />
    </div>
  </div>
);

/**
 * 列表项骨架屏
 */
export const ListItemSkeleton = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
    <div className="flex gap-4">
      <div className="w-16 h-16 bg-slate-200 rounded-full" />
      <div className="flex-1 space-y-3">
        <div className="h-5 bg-slate-200 rounded w-1/2" />
        <div className="h-4 bg-slate-200 rounded w-1/4" />
        <div className="flex gap-2">
          <div className="h-4 bg-slate-200 rounded w-16" />
          <div className="h-4 bg-slate-200 rounded w-16" />
          <div className="h-4 bg-slate-200 rounded w-16" />
        </div>
      </div>
      <div className="w-32 space-y-2">
        <div className="h-4 bg-slate-200 rounded w-full" />
        <div className="h-8 bg-slate-200 rounded w-full" />
      </div>
    </div>
  </div>
);

/**
 * 页面加载骨架屏
 */
export const PageSkeleton = ({ type = 'grid' }) => {
  const items = Array(6).fill(null);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {type === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((_, i) => (
            <ModelCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((_, i) => (
            <ListItemSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default {
  ModelCardSkeleton,
  PostCardSkeleton,
  ListItemSkeleton,
  PageSkeleton,
};
