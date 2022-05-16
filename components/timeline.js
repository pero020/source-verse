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

          <TimelineOppositeContent  color="background.contrastColor">
            April 3, 2022
          </TimelineOppositeContent>

          <TimelineSeparator >
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent  color="background.contrastColor">Created Website</TimelineContent>

        </TimelineItem>

<TimelineItem>

          <TimelineOppositeContent  color="background.contrastColor">
            April 5, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent  color="background.contrastColor">Google auth added</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 7, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Database initialized</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 9, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Added Q&A section</TimelineContent>

</TimelineItem>


<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 11, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">First added question</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 13, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Improved website layout</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 16, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Voting system</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 15, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Questions are deletable</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            April 19, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Roles added</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            May 3, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Coins added</TimelineContent>

</TimelineItem>

<TimelineItem>

          <TimelineOppositeContent color="background.contrastColor">
            May 10, 2022
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineDot color="secondary" />
            
            
          </TimelineSeparator>
          <TimelineContent color="background.contrastColor">Domain reviews added</TimelineContent>

</TimelineItem>


      </Timeline>
    </React.Fragment>
  );
}
