import { capabilities } from '../../data/site'
import { Reveal } from '../ui/Reveal'
export function Capabilities(){return <section className="capabilities"><Reveal className="section-title"><p className="section-no">03 / CAPABILITIES</p><h2>智能，发生在行动中。</h2></Reveal><div className="capability-list">{capabilities.map((c,i)=><Reveal className={`capability ${c.tone}`} key={c.name}><div className="cap-visual"><span>{c.id}</span><i/><b>{i%2===0?'MOVE':'SENSE'}</b></div><div className="cap-copy"><p>{c.cn}</p><h3>{c.name}</h3><p>{c.text}</p></div></Reveal>)}</div></section>}
