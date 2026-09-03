export type Product = {
  id: string
  category: string
  title: string
  subtitle: string
  description: string
  image: string
  mobileImage: string
  imageFit: 'cover' | 'contain'
  href: string
  primaryAction: string
  secondaryAction?: { label: string; href: string }
  theme: 'light' | 'silver' | 'dark'
}

const asset = (file: string) => `${import.meta.env.BASE_URL}products/${file}`

export const products: Product[] = [
  { id:'r1', category:'Humanoid Robot', title:'ONE-G R1', subtitle:'通用人形机器人', description:'为真实世界任务而设计。', image:asset('r1.svg'), mobileImage:asset('r1-mobile.svg'), imageFit:'contain', href:'/robots/r1', primaryAction:'了解 R1', secondaryAction:{label:'开始配置',href:'/configure'}, theme:'light' },
  { id:'hand', category:'Dexterous Manipulation', title:'ONE-G HAND', subtitle:'让机器人真正操作世界。', description:'高自由度机器人末端执行系统。', image:asset('hand.svg'), mobileImage:asset('hand-mobile.svg'), imageFit:'contain', href:'/robots/hand', primaryAction:'了解产品', theme:'silver' },
  { id:'vision', category:'Robot Perception', title:'ONE-G VISION', subtitle:'看见。理解。行动。', description:'面向机器人的视觉感知系统。', image:asset('vision.svg'), mobileImage:asset('vision-mobile.svg'), imageFit:'cover', href:'/robots/vision', primaryAction:'了解视觉系统', theme:'dark' },
  { id:'core', category:'Robot Intelligence', title:'ONE-G CORE', subtitle:'机器人的智能核心。', description:'统一感知、决策与控制。', image:asset('core.svg'), mobileImage:asset('core-mobile.svg'), imageFit:'cover', href:'/technology', primaryAction:'了解平台', theme:'silver' },
  { id:'custom', category:'Customization', title:'CUSTOM ONE-G', subtitle:'机器人，不应该只有一种答案。', description:'从硬件到智能，构建属于你的机器人。', image:asset('custom.svg'), mobileImage:asset('custom-mobile.svg'), imageFit:'cover', href:'/configure', primaryAction:'开始定制', theme:'light' },
]
