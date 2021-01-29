interface Props {
  classNames: string,
  direction: 'up' | 'down'
}

function ChevronCompact(props: Props) {
  const { direction, classNames } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-chevron-compact-${direction} ${classNames}`} viewBox="0 0 16 16">
      {
        direction === 'up' &&
        <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z" />
      }
      {
        direction === 'down' &&
        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
      }
    </svg>
  )
}

export default ChevronCompact;