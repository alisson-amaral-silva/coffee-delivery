import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
export function Router() {
  return (
    <Routes>
      {/* rota / padrao vai ter o default layout e nele tem o outlet que
          sera preenchido com o conteudo de cada uma das rotas abaixo
          as rotas pai tornam as filhas encadeadas, então se a 1 tiver uma rota /admin e as rotas 
          abaixo tiverem rotas especificas ficará da forma /admin/whatever
      */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
