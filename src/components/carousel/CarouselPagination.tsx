export function CarouselPagination({ count, current, select }: { count: number; current: number; select: (index:number) => void }) {
  return <div className="carousel-pagination"><div className="pagination-numbers">{Array.from({length:count},(_,i)=><button className={i===current?'active':''} onClick={()=>select(i)} aria-label={`查看第 ${i+1} 个产品`} aria-current={i===current?'true':undefined} key={i}>{String(i+1).padStart(2,'0')}</button>)}</div><div className="progress-track"><span style={{transform:`scaleX(${(current+1)/count})`}} /></div></div>
}
