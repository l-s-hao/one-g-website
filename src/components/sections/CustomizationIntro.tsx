import { modules } from '../../data/site'
import { ArrowLink } from '../ui/ArrowLink'
import { Reveal } from '../ui/Reveal'
export function CustomizationIntro(){return <section className="custom-intro"><Reveal className="statement"><p className="section-no">02 / DEFINE</p><h2>不是购买一台<br/>固定的机器人。</h2><p>而是决定它能成为怎样的机器人。</p></Reveal><Reveal className="module-stage"><div className="module-core">R1<span>YOUR ROBOT</span></div><div className="module-list">{modules.map((m,i)=><div key={m}><span>0{i+1}</span>{m}</div>)}</div></Reveal><Reveal className="center-action"><ArrowLink to="/configure">开始配置</ArrowLink></Reveal></section>}
