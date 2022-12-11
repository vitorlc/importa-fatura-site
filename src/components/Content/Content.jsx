import InstallButton from '../Button/Button'
import Card from '../Card/Card'
import './Content.css'
import formulas from '../../assets/formulas.svg'
import charts from '../../assets/charts.svg'
import dashboard from '../../assets/dashboard.svg'
import tasks from '../../assets/tasks.svg'
import thirdparty from '../../assets/thirdparty.svg'
import backup from '../../assets/backup.svg'
import sectionImage from '../../assets/synced-column-sheets.png'

function Content () {
  return (
    <div className='content'>
      <section id='main-content' className='main-content'>
        <div className='main-content_text'>
          <h1>Give Notion the superpowers of Google Sheets</h1>
          <p>Keep your databases from Notion automatically in sync with Google Sheets. Use Sheets formulas to send data to Notion, create recurring tasks and even connect cells with Notion blocks for dynamic dashboards!</p>
          <InstallButton />
        </div>
        <div className='main-content_video'>
          <iframe loading='lazy' width='100%' height='100%' src='https://www.youtube.com/embed/BPCDGCLs1bE' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />
        </div>
      </section>

      <section id='cards' className='cards'>
        <h2>What Notion2Sheets does for you?</h2>
        <div className='cards-grid'>

          <Card icon={formulas} title='Formulas' description='You have now access to more than 450 Sheets formulas to use the same way as in Notion.' />
          <Card icon={charts} title='Charts' description='All the power of Google Sheets charts at hand, create and embed them back in Notion.' />
          <Card icon={backup} title='Back Ups' description='No more manual exports. Keep a copy of your databases automatically updated at all times.' />
          <Card icon={tasks} title='Recurring Tasks' description='Schedule page creations daily, weekly, monthly and more. Add default values like templates.' />
          <Card icon={dashboard} title='Dashboards' description='Build beautiful and dynamic dashboards, connect the value of a cell with a Notion block.' />
          <Card icon={thirdparty} title='Third Party' description='Integrate your Notion databases with thousands of other Google Workspace Add-Ons.' />

        </div>
      </section>

      <section id='section' className='section'>
        <div className='section_text'>
          <h2>Enable the usage of Google Sheets formulas with synced columns.</h2>
          <span>Synced columns allows you to sync the values of a column in Sheets to Notion. Use formulas like =GOOGLEFINANCE, =IMPORTXML and keep those values automatically in sync with your Notion database.
          </span>
          <span>Notion just became much more powerful.</span>
        </div>
        <div className='section_image'>
          <img src={sectionImage} alt='section-image' />
        </div>
      </section>

    </div>
  )
}

export default Content
