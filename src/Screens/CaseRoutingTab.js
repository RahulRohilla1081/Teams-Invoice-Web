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
                        date="15/10/2023"
                        iconStyle={{ background: '#279244', color: '#fff', }}
                        // icon={<AccountTreeIcon />}
                    >

                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Step Name</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                SES1
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Group</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                KRC_RE_FM_Gigaflex_SES12
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Users</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                Apawar
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Completed On</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            16/10/2023 : 11:00 AM
                            </p>
                        </div>

                        {/* 
                        <div className='cards'>
                        <h3 className="vertical-timeline-element-title">Step Name</h3>
                     
                        <p>
                            SES1
                        </p>
                        <h3 className="vertical-timeline-element-title">Step Name</h3>
                   
                        <p>
                            SES1
                        </p>
                        </div> */}
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="16/10/2023"
                        iconStyle={{ background: '#279244', color: '#fff' }}
                        // icon={<Groups2Icon />}
                    >
                       <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Step Name</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                SES2
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Group</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                KRC_RE_FM_Gigaflex_SES21
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Users</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                kshah
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Completed On</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            15/02/2022 : 07:04 PM
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="17/10/2023"
                        iconStyle={{ background: '#f24b00', color: '#fff' }}
                        // icon={<UpdateIcon />}
                    >
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Step Name</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                Compliance
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Group</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                KRC_RE_AccountPayble_HO_Compliance
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Users</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                abiswal
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Completed On</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            07/02/2022 : 01:47 PM
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="18/10/2023"
                        iconStyle={{ background: '#110840', color: '#fff' }}
                        // icon={<UpdateIcon />}
                    >
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Step Name</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                DOA-Level-1
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Group</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                KRC_RE_FM_Gigaflex_DOA11
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Users</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                akapale
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Completed On</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            05/04/2023 : 02:37 PM
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="19/10/2023"
                        iconStyle={{ background: '#110840', color: '#fff' }}
                        // icon={<UpdateIcon />}
                    >
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Step Name</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                DOA-Level-2
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Group</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                KRC_RE_FM_Gigaflex_DOA12
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Users</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                                unmeshp
                            </p>
                        </div>
                        <div className='inner_div'>
                            <h3 className="vertical-timeline-element-title">Completed On</h3>
                            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                            <p className='card_para'>
                            15/07/2022 : 10:22 AM
                            </p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
}

export default CaseRoutingTab