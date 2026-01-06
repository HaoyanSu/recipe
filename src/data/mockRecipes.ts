import { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: '番茄炒蛋',
    description: '经典家常菜，酸甜可口，营养丰富，是新手入门的首选菜品。',
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop&q=60',
    cookingTime: 10,
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      { name: '番茄', amount: '2', unit: '个', calories: 40 },
      { name: '鸡蛋', amount: '3', unit: '个', calories: 210 },
      { name: '葱花', amount: '适量', unit: '', calories: 5 },
      { name: '盐', amount: '1', unit: '茶匙', calories: 0 },
      { name: '糖', amount: '1/2', unit: '茶匙', calories: 8 },
      { name: '食用油', amount: '2', unit: '汤匙', calories: 240 },
    ],
    steps: [
      {
        step: 1,
        description: '将番茄洗净，切成小块。鸡蛋打入碗中，加少许盐搅打均匀。',
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1546554137-f86b9593a222?w=600&auto=format&fit=crop&q=60',
        tips: '番茄切块大小要均匀，这样炒出来口感更好'
      },
      {
        step: 2,
        description: '锅中倒油，油热后倒入蛋液，用筷子快速搅拌成蛋花，盛出备用。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1482049016gy-2d3d729a6ddc?w=600&auto=format&fit=crop&q=60',
        tips: '蛋液要在油热后再倒入，这样蛋花更蓬松'
      },
      {
        step: 3,
        description: '锅中留少许底油，放入番茄块翻炒，加入盐和糖调味。',
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=600&auto=format&fit=crop&q=60',
        tips: '加糖可以中和番茄的酸味，让口感更好'
      },
      {
        step: 4,
        description: '待番茄出汁后，倒入炒好的鸡蛋，翻炒均匀，撒上葱花即可出锅。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60',
        tips: '最后翻炒时间不要太长，保持鸡蛋嫩滑'
      }
    ],
    nutrition: {
      calories: 280,
      protein: 18,
      carbs: 12,
      fat: 20,
      fiber: 2
    },
    tags: ['家常菜', '快手菜', '低卡', '高蛋白'],
    source: '小红书 @美食达人',
    sourceUrl: 'https://example.com'
  },
  {
    id: '2',
    name: '蒜蓉西兰花',
    description: '健康低卡的素食选择，蒜香四溢，清脆爽口，是减脂期的完美配菜。',
    imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&auto=format&fit=crop&q=60',
    cookingTime: 8,
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      { name: '西兰花', amount: '300', unit: '克', calories: 100 },
      { name: '大蒜', amount: '5', unit: '瓣', calories: 20 },
      { name: '盐', amount: '1', unit: '茶匙', calories: 0 },
      { name: '生抽', amount: '1', unit: '汤匙', calories: 10 },
      { name: '食用油', amount: '1', unit: '汤匙', calories: 120 },
    ],
    steps: [
      {
        step: 1,
        description: '西兰花洗净切成小朵，大蒜切碎备用。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=600&auto=format&fit=crop&q=60',
        tips: '西兰花要用流水冲洗干净，去除农药残留'
      },
      {
        step: 2,
        description: '烧一锅水，水开后放入西兰花焯水1分钟，捞出沥干。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=600&auto=format&fit=crop&q=60',
        tips: '焯水时间不要太长，保持西兰花的脆嫩和翠绿色'
      },
      {
        step: 3,
        description: '锅中倒油，放入蒜末爆香，加入西兰花翻炒。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=60',
        tips: '小火炒蒜末，避免蒜末炒糊变苦'
      },
      {
        step: 4,
        description: '加入盐和生抽调味，翻炒均匀即可出锅。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&auto=format&fit=crop&q=60',
        tips: '快速翻炒，保持西兰花的鲜嫩口感'
      }
    ],
    nutrition: {
      calories: 125,
      protein: 8,
      carbs: 10,
      fat: 7,
      fiber: 5
    },
    tags: ['素食', '低卡', '快手菜', '减脂'],
    source: '下厨房 @健康厨房',
    sourceUrl: 'https://example.com'
  },
  {
    id: '3',
    name: '红烧排骨',
    description: '色泽红亮，肉质酥烂，甜咸适中，是一道老少皆宜的经典硬菜。',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=60',
    cookingTime: 45,
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      { name: '猪排骨', amount: '500', unit: '克', calories: 1250 },
      { name: '生姜', amount: '3', unit: '片', calories: 5 },
      { name: '葱', amount: '2', unit: '根', calories: 10 },
      { name: '八角', amount: '2', unit: '个', calories: 5 },
      { name: '冰糖', amount: '30', unit: '克', calories: 120 },
      { name: '生抽', amount: '2', unit: '汤匙', calories: 20 },
      { name: '老抽', amount: '1', unit: '汤匙', calories: 10 },
      { name: '料酒', amount: '2', unit: '汤匙', calories: 20 },
    ],
    steps: [
      {
        step: 1,
        description: '排骨洗净切块，冷水下锅焯水，撇去浮沫后捞出备用。',
        duration: 10,
        imageUrl: 'https://images.unsplash.com/photo-1602473812169-e969e8e15c3b?w=600&auto=format&fit=crop&q=60',
        tips: '冷水下锅可以更好地去除血水和杂质'
      },
      {
        step: 2,
        description: '锅中放少许油，小火将冰糖炒至融化变色，呈焦糖色。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&auto=format&fit=crop&q=60',
        tips: '炒糖色要用小火，避免炒糊发苦'
      },
      {
        step: 3,
        description: '放入排骨翻炒上色，加入姜片、葱段、八角和料酒。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60',
        tips: '翻炒均匀让每块排骨都裹上糖色'
      },
      {
        step: 4,
        description: '加入生抽、老抽调味，倒入开水没过排骨，大火烧开后转小火炖30分钟。',
        duration: 30,
        imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60',
        tips: '一定要用开水，冷水会让肉质变硬'
      },
      {
        step: 5,
        description: '大火收汁，待汤汁浓稠裹满排骨即可出锅。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60',
        tips: '收汁时要不断翻动，避免糊底'
      }
    ],
    nutrition: {
      calories: 520,
      protein: 35,
      carbs: 25,
      fat: 32,
      fiber: 1
    },
    tags: ['家常菜', '硬菜', '高蛋白', '下饭菜'],
    source: '美食杰 @厨艺大师',
    sourceUrl: 'https://example.com'
  },
  {
    id: '4',
    name: '凉拌黄瓜',
    description: '清爽开胃的夏日凉菜，酸辣可口，制作简单快速，是解暑佳品。',
    imageUrl: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=800&auto=format&fit=crop&q=60',
    cookingTime: 5,
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      { name: '黄瓜', amount: '2', unit: '根', calories: 30 },
      { name: '大蒜', amount: '3', unit: '瓣', calories: 12 },
      { name: '香醋', amount: '2', unit: '汤匙', calories: 6 },
      { name: '生抽', amount: '1', unit: '汤匙', calories: 10 },
      { name: '辣椒油', amount: '1', unit: '汤匙', calories: 60 },
      { name: '香油', amount: '1', unit: '茶匙', calories: 40 },
      { name: '白糖', amount: '1', unit: '茶匙', calories: 16 },
    ],
    steps: [
      {
        step: 1,
        description: '黄瓜洗净，用刀拍碎或切成滚刀块。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=600&auto=format&fit=crop&q=60',
        tips: '拍碎的黄瓜更容易入味'
      },
      {
        step: 2,
        description: '大蒜切碎，与香醋、生抽、辣椒油、香油、白糖混合调成料汁。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&auto=format&fit=crop&q=60',
        tips: '可根据个人口味调整辣椒油用量'
      },
      {
        step: 3,
        description: '将料汁倒在黄瓜上，拌匀即可食用。',
        duration: 1,
        imageUrl: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&auto=format&fit=crop&q=60',
        tips: '现拌现吃口感最佳，放久了黄瓜会出水'
      }
    ],
    nutrition: {
      calories: 85,
      protein: 2,
      carbs: 12,
      fat: 4,
      fiber: 1
    },
    tags: ['凉菜', '低卡', '快手菜', '开胃', '素食'],
    source: '抖音 @凉菜达人',
    sourceUrl: 'https://example.com'
  },
  {
    id: '5',
    name: '麻婆豆腐',
    description: '四川名菜，麻辣鲜香，豆腐嫩滑，是米饭的最佳伴侣。',
    imageUrl: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?w=800&auto=format&fit=crop&q=60',
    cookingTime: 15,
    difficulty: 'medium',
    servings: 3,
    ingredients: [
      { name: '嫩豆腐', amount: '400', unit: '克', calories: 240 },
      { name: '猪肉末', amount: '100', unit: '克', calories: 250 },
      { name: '郫县豆瓣酱', amount: '2', unit: '汤匙', calories: 40 },
      { name: '花椒粉', amount: '1', unit: '茶匙', calories: 10 },
      { name: '葱花', amount: '适量', unit: '', calories: 5 },
      { name: '生抽', amount: '1', unit: '汤匙', calories: 10 },
      { name: '淀粉', amount: '1', unit: '汤匙', calories: 30 },
    ],
    steps: [
      {
        step: 1,
        description: '豆腐切成2厘米见方的小块，放入淡盐水中浸泡5分钟。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60',
        tips: '盐水浸泡可以让豆腐更加紧实，炒时不易碎'
      },
      {
        step: 2,
        description: '锅中倒油，放入肉末翻炒至变色，加入豆瓣酱炒出红油。',
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60',
        tips: '豆瓣酱要炒出红油才能香'
      },
      {
        step: 3,
        description: '加入适量清水，放入豆腐块，小火煮5分钟让豆腐入味。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?w=600&auto=format&fit=crop&q=60',
        tips: '轻轻推动锅，不要用铲子搅拌，避免豆腐碎掉'
      },
      {
        step: 4,
        description: '淀粉加水调成水淀粉，倒入锅中勾芡，撒上花椒粉和葱花即可。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1582576163090-09d3b6f8a969?w=600&auto=format&fit=crop&q=60',
        tips: '勾芡后大火收一下，让芡汁更加浓稠'
      }
    ],
    nutrition: {
      calories: 320,
      protein: 22,
      carbs: 15,
      fat: 20,
      fiber: 3
    },
    tags: ['川菜', '下饭菜', '高蛋白', '辣味'],
    source: '小红书 @川菜大师',
    sourceUrl: 'https://example.com'
  },
  {
    id: '6',
    name: '清蒸鲈鱼',
    description: '保留鱼肉原汁原味的健康做法，肉质鲜嫩，营养丰富，是宴客首选。',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop&q=60',
    cookingTime: 20,
    difficulty: 'medium',
    servings: 3,
    ingredients: [
      { name: '鲈鱼', amount: '1', unit: '条（约500克）', calories: 400 },
      { name: '葱', amount: '2', unit: '根', calories: 10 },
      { name: '姜', amount: '1', unit: '块', calories: 5 },
      { name: '蒸鱼豉油', amount: '3', unit: '汤匙', calories: 30 },
      { name: '料酒', amount: '2', unit: '汤匙', calories: 20 },
      { name: '食用油', amount: '2', unit: '汤匙', calories: 240 },
    ],
    steps: [
      {
        step: 1,
        description: '鲈鱼处理干净，在鱼身两面划几刀，抹上料酒腌制10分钟。',
        duration: 10,
        imageUrl: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?w=600&auto=format&fit=crop&q=60',
        tips: '划刀可以让鱼肉更快熟透，也更入味'
      },
      {
        step: 2,
        description: '葱姜切丝，一半铺在盘底，将鱼放上，另一半放在鱼身上。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60',
        tips: '底部的葱姜可以让鱼受热均匀'
      },
      {
        step: 3,
        description: '水开后放入蒸锅，大火蒸8-10分钟，取出倒掉蒸出的汤汁。',
        duration: 10,
        imageUrl: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600&auto=format&fit=crop&q=60',
        tips: '蒸的时间根据鱼的大小调整，不要蒸太久'
      },
      {
        step: 4,
        description: '换上新的葱丝，淋上蒸鱼豉油，将烧热的油浇在葱丝上即可。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60',
        tips: '热油激发葱香，这一步是点睛之笔'
      }
    ],
    nutrition: {
      calories: 280,
      protein: 42,
      carbs: 5,
      fat: 12,
      fiber: 0
    },
    tags: ['粤菜', '清淡', '高蛋白', '低脂', '宴客菜'],
    source: '美食杰 @粤菜达人',
    sourceUrl: 'https://example.com'
  },
  {
    id: '7',
    name: '酸辣土豆丝',
    description: '脆嫩爽口的下饭神器，酸辣开胃，简单易做，是学生党的最爱。',
    imageUrl: 'https://images.unsplash.com/photo-1628839178410-31d7f80d9b66?w=800&auto=format&fit=crop&q=60',
    cookingTime: 12,
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      { name: '土豆', amount: '2', unit: '个', calories: 320 },
      { name: '干辣椒', amount: '5', unit: '个', calories: 10 },
      { name: '花椒', amount: '1', unit: '茶匙', calories: 5 },
      { name: '白醋', amount: '2', unit: '汤匙', calories: 6 },
      { name: '盐', amount: '1', unit: '茶匙', calories: 0 },
      { name: '葱花', amount: '适量', unit: '', calories: 5 },
    ],
    steps: [
      {
        step: 1,
        description: '土豆去皮切成细丝，用清水浸泡去除淀粉，沥干备用。',
        duration: 5,
        imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82ber2eb?w=600&auto=format&fit=crop&q=60',
        tips: '多换几次水，淀粉洗得越干净，土豆丝越脆'
      },
      {
        step: 2,
        description: '锅中倒油，放入干辣椒和花椒爆香。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&auto=format&fit=crop&q=60',
        tips: '小火慢炸，辣椒和花椒不要炸糊'
      },
      {
        step: 3,
        description: '大火放入土豆丝快速翻炒，加入盐和白醋调味。',
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1628839178410-31d7f80d9b66?w=600&auto=format&fit=crop&q=60',
        tips: '全程大火快炒，保持土豆丝脆嫩'
      },
      {
        step: 4,
        description: '撒上葱花，翻炒均匀即可出锅。',
        duration: 1,
        imageUrl: 'https://images.unsplash.com/photo-1628839178410-31d7f80d9b66?w=600&auto=format&fit=crop&q=60',
        tips: '不要炒太久，保持土豆丝的脆嫩口感'
      }
    ],
    nutrition: {
      calories: 180,
      protein: 4,
      carbs: 35,
      fat: 5,
      fiber: 4
    },
    tags: ['家常菜', '素食', '下饭菜', '快手菜', '酸辣'],
    source: '下厨房 @素食达人',
    sourceUrl: 'https://example.com'
  },
  {
    id: '8',
    name: '蛋炒饭',
    description: '简单却不简单的经典，粒粒分明，蛋香四溢，是清冰箱的王者。',
    imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&auto=format&fit=crop&q=60',
    cookingTime: 8,
    difficulty: 'easy',
    servings: 1,
    ingredients: [
      { name: '隔夜饭', amount: '1', unit: '碗', calories: 300 },
      { name: '鸡蛋', amount: '2', unit: '个', calories: 140 },
      { name: '葱花', amount: '适量', unit: '', calories: 5 },
      { name: '盐', amount: '1', unit: '茶匙', calories: 0 },
      { name: '食用油', amount: '2', unit: '汤匙', calories: 240 },
    ],
    steps: [
      {
        step: 1,
        description: '鸡蛋打散，将隔夜饭用手拨散开。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=600&auto=format&fit=crop&q=60',
        tips: '用隔夜饭炒出来的饭更加粒粒分明'
      },
      {
        step: 2,
        description: '锅中多放些油，油热后倒入蛋液，快速滑散成蛋花。',
        duration: 1,
        imageUrl: 'https://images.unsplash.com/photo-1604889426295-1d375cfed18a?w=600&auto=format&fit=crop&q=60',
        tips: '油要足够热，蛋花才会蓬松'
      },
      {
        step: 3,
        description: '立即倒入米饭，大火快速翻炒，让每粒米饭都裹上蛋液。',
        duration: 3,
        imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60',
        tips: '这就是金包银的秘诀，蛋液包裹米饭'
      },
      {
        step: 4,
        description: '加入盐调味，撒上葱花，翻炒均匀即可出锅。',
        duration: 2,
        imageUrl: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60',
        tips: '全程大火，动作要快'
      }
    ],
    nutrition: {
      calories: 450,
      protein: 15,
      carbs: 55,
      fat: 20,
      fiber: 1
    },
    tags: ['主食', '快手菜', '清冰箱', '经典'],
    source: '抖音 @炒饭之王',
    sourceUrl: 'https://example.com'
  }
];

// Function to simulate web search results
export const searchWebRecipes = async (query: string): Promise<{name: string; source: string; url: string}[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock web search results
  return [
    { name: `${query}的10种做法`, source: '小红书', url: 'https://xiaohongshu.com' },
    { name: `网红${query}教程`, source: '抖音', url: 'https://douyin.com' },
    { name: `大厨教你做${query}`, source: '下厨房', url: 'https://xiachufang.com' },
    { name: `${query}正宗做法`, source: '美食杰', url: 'https://meishij.com' },
  ];
};

// Function to filter recipes based on search query
export const filterRecipes = (recipes: Recipe[], query: string, restrictions: string[]): Recipe[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return recipes.filter(recipe => {
    // Check if recipe matches query
    const matchesQuery = 
      recipe.name.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowercaseQuery));
    
    // Check restrictions
    const passesRestrictions = !restrictions.some(restriction => 
      recipe.name.toLowerCase().includes(restriction.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(restriction.toLowerCase()))
    );
    
    return matchesQuery && passesRestrictions;
  });
};

