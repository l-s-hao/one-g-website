import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ConfigurePage } from './pages/ConfigurePage'
import { HomePage } from './pages/HomePage'
import { SkeletonPage } from './pages/SkeletonPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/robots" element={<SkeletonPage eyebrow="ONE-G ROBOTS" title="机器，为真实世界而生。" />} />
        <Route path="/robots/:productId" element={<SkeletonPage eyebrow="ONE-G PRODUCT" title="产品详情即将呈现。" />} />
        <Route path="/technology" element={<SkeletonPage eyebrow="ONE-G CORE" title="统一智能，跨越不同本体。" />} />
        <Route path="/support" element={<SkeletonPage eyebrow="ONE-G SUPPORT" title="让每一次部署稳定发生。" />} />
        <Route path="/custom" element={<SkeletonPage eyebrow="ONE-G CUSTOM" title="告诉我们，它需要完成什么。" cta="提交定制需求" />} />
      </Route>
      <Route path="/configure" element={<ConfigurePage />} />
    </Routes>
  )
}
