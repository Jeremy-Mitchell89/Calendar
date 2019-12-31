import React from "react"
import { Link } from "gatsby"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fullcalendar/core/main.css"
import "@fullcalendar/daygrid/main.css"
import "@fullcalendar/timegrid/main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FullCalendar
      className="demo-app-calendar"
      defaultView="dayGridMonth"
      header={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
