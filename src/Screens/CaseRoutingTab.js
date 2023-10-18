import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './CaseRoutingTab.css'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import Groups2Icon from '@mui/icons-material/Groups2';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';

function CaseRoutingTab() {
    return (
        <>
            <div className='main_container'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                        date="2011 - present"
                        iconStyle={{ background: '#110840', color: '#fff',  }}
                          icon={<AccountTreeIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Step Name</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                        <p>
                            SES1
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: '#110840', color: '#fff' }}
                    icon={<Groups2Icon />}
                    >
                        <h3 className="vertical-timeline-element-title">Group</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>
                            KRC_RE_FM_Gigaflex_SES12;KRC_RE_FM_Airoli_SES12
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: '#110840', color: '#fff' }}
                    icon={<PersonIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Users</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}
                        <p>
                            Apawar
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: '#110840', color: '#fff' }}
                    icon={<UpdateIcon/>}
                    >
                        <h3 className="vertical-timeline-element-title">Completed On</h3>
                        {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
                        <p>
                            16/10/2023 : 11:00 AM
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
}

export default CaseRoutingTab