import { BrowserRouter, Route, Switch } from "react-router-dom"
import Index from "./pages"
import Tour from "./pages/tour"

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/tour">
            <Tour />
          </Route>

          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
