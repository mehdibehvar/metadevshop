import { Button } from "@mui/material"
import { ReactElement } from "react"
import { Layout } from "../components/layouts/layout"
import { NestedLayout } from "../components/layouts/NestedLayout"

import { NextPageWithLayout } from "./_app"

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Button variant="contained">خانه</Button>
    </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>
        {page}
      </NestedLayout>
    </Layout>
  )
}
export default Home
