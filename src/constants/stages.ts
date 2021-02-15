const UNSCHEDULED = 'Unscheduled';
const READY_FOR_DEVELOPMENT = 'Ready for Development';
const IN_PROGRESS = 'In Progress';
const READY_FOR_REVIEW = 'Ready for Review';
const COMPLETE = 'Complete';

const STAGES = [
  {
    ID: '0',
    LABEL: UNSCHEDULED,
    VALUE: UNSCHEDULED,
  },
  {
    ID: '1',
    LABEL: READY_FOR_DEVELOPMENT,
    VALUE: READY_FOR_DEVELOPMENT,
  },
  {
    ID: '2',
    LABEL: IN_PROGRESS,
    VALUE: IN_PROGRESS,
  },
  {
    ID: '3',
    LABEL: READY_FOR_REVIEW,
    VALUE: READY_FOR_REVIEW,
  },
  {
    ID: '4',
    LABEL: COMPLETE,
    VALUE: COMPLETE
  },
];

export {
  STAGES,
  UNSCHEDULED,
  READY_FOR_DEVELOPMENT,
  IN_PROGRESS,
  READY_FOR_REVIEW,
  COMPLETE,
}