
import {Routes,Route} from 'react-router-dom'
import Welcome from './components/Welcome'
import Board from './components/Board'
import Result from './components/Result'

const App = () => (
    <Routes>
       <Route exact path="/" element={<Welcome/>}/>
       <Route exact path="/board" element={<Board/>}/>
       <Route exact path="/result" element={<Result/>}/>
    </Routes>
)

export default App