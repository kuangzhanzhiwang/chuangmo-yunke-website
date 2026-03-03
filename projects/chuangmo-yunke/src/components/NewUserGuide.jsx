import React, { useState, useEffect } from 'react';
import { X, Check, User, Settings, Award, Gift } from 'lucide-react';

const NewUserGuide = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, text: '完善个人资料', completed: false, reward: 20 },
    { id: 2, text: '首次 AI 生成', completed: false, reward: 30 },
    { id: 3, text: '首次购买模型', completed: false, reward: 50 },
    { id: 4, text: '关注 3 位创作者', completed: false, reward: 10 },
    { id: 5, text: '加入社区讨论', completed: false, reward: 10 },
  ]);

  const totalReward = tasks.reduce((sum, t) => t.completed ? sum + t.reward : sum, 0);
  const progress = (tasks.filter(t => t.completed).length / tasks.length) * 100;

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => onComplete?.(totalReward), 1000);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">🎉 欢迎加入创模云科！</h2>
            <button onClick={onComplete} className="text-white/80 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-white/90">完成新手任务，领取 ¥100 新人礼包</p>
        </div>

        {/* Progress */}
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">任务进度</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-emerald-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Tasks */}
          <div className="space-y-3 mb-6">
            {tasks.map((task, idx) => (
              <div
                key={task.id}
                className={`flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                  task.completed
                    ? 'border-emerald-500 bg-emerald-50'
                    : 'border-slate-200 hover:border-blue-300'
                }`}
                onClick={() => toggleTask(task.id)}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  task.completed ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  {task.completed ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
                <div className="flex-1">
                  <div className={`font-medium ${task.completed ? 'text-emerald-700 line-through' : 'text-slate-900'}`}>
                    {task.text}
                  </div>
                  <div className="text-sm text-slate-500">
                    完成可获得 <span className="text-emerald-600 font-medium">¥{task.reward}</span>
                  </div>
                </div>
                {task.completed && (
                  <div className="text-emerald-600 font-bold">+¥{task.reward}</div>
                )}
              </div>
            ))}
          </div>

          {/* Total Reward */}
          <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-4 text-center mb-6">
            <div className="text-sm text-slate-600 mb-2">已领取奖励</div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              ¥{totalReward}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => toggleTask(tasks[step]?.id)}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-emerald-700 transition-colors"
          >
            {tasks[step]?.completed ? '已完成' : `去完成：${tasks[step]?.text}`}
          </button>

          {/* Tips */}
          <div className="mt-4 text-center text-sm text-slate-500">
            💡 提示：点击任务卡片可标记完成状态
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUserGuide;
