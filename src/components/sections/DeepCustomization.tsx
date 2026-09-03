import { customItems } from '../../data/site'
import { ArrowLink } from '../ui/ArrowLink'
import { Reveal } from '../ui/Reveal'
export function DeepCustomization(){return <section className="deep-custom"><Reveal><p className="section-no">04 / CUSTOM ENGINEERING</p><h2>需要的不只是<br/>标准配置？</h2><p className="lead">从机械结构到智能能力，为具体任务构建机器人。</p><ArrowLink to="/custom">提交定制需求</ArrowLink></Reveal><Reveal className="custom-index">{customItems.map((x,i)=><div key={x}><span>0{i+1}</span><p>{x}</p><i>↗</i></div>)}</Reveal></section>}
