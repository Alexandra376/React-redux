// import Lesson_16 from "./lessons/Lesson_16/Lesson_16"

// import Homework_16 from "./homeworks/Homework_16/Homework_16"

// import Homework_17 from "./homeworks/Homework_17/Homework_17"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

function App () {
  return (
    <BrowserRouter>
      {/*<Lesson_16/>*/}
      {/*<Homework_16/>*/}
      {/*<Homework_17/>*/}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
