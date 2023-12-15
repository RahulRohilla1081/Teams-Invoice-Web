import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CaseRoutingTab.css'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Groups2Icon from '@mui/icons-material/Groups2';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';

function CaseRoutingTab(props) {

    
  const convertIndianStandardIntoYMD = (date) => {
    var date = new Date(date),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

    return (
        <>
            <div className='main_container'>
                <VerticalTimeline  lineColor="#727272">
                    {props.INVOICE_DETAILS.CaseRoutingDetails.map((val)=>{
                    return(
                        <VerticalTimelineElement              
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date={   convertIndianStandardIntoYMD( val. completedOn)}
                        iconStyle={{ background: '#279244', color: '#fff', border: '2px solid #0000'  }}
                        // icon={<AccountTreeIcon />}
                    >

                        <div className='inner_div'>
                            <p className="vertical-timeline-element-title">Step Name</p>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            {val.stepName}
                            </p>
                        </div>
                        <div className='inner_div'>
                            <p className="vertical-timeline-element-title">Group</p>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                {val.groups}
                            </p>
                        </div>
                        <div className='inner_div'>
                            <p className="vertical-timeline-element-title">Users</p>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                               {val.users}
                            </p>
                        </div>
                        <div className='inner_div'>
                            <p className="vertical-timeline-element-title">Completed On</p>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                               {  convertIndianStandardIntoYMD( val. completedOn)}
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    )
                    })}

                </VerticalTimeline>
            </div>
        </>
    );
}

export default CaseRoutingTab