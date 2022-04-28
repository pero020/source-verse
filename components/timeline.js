import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


export default function OppositeContentTimeline() {
  return (
      
    <React.Fragment>
      <Timeline position="alternate">

        <TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 3, 2022
          </TimelineOppositeContent>

          <TimelineSeparator >
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Created Website</TimelineContent>

        </TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 5, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Google auth added</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 7, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Database initialized</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 9, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Added Q&A section</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 11, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>First added question</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 13, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Improved website layout</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 16, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Voting system</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 15, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Questions are deletable</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="text.secondary">
            April 19, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            
          </TimelineSeparator>
          <TimelineContent>Roles added</TimelineContent>

</TimelineItem>



      </Timeline>
    </React.Fragment>
  );
}
