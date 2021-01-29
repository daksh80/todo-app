import React from 'react';
import { FachevronDown,FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa'

export const Sidebar = () =>(
       <div className="sidebar" data-testid ="sidebar">
       <ul className ="sidebar__generic">
              <li><span><FaInbox/></span><span>Inbox</span></li>
              <li><span><FaRegCalendar/></span><span>Today</span></li>
              <li><span><FaRegCalendarAlt/></span><span>Next 7 days</span></li>
       </ul>
</div>
);