[
  '{{repeat(100, 100)}}',
  {
    startDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    endDate: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}',
    scheduleType: '{{random("General", "Exception")}}',
    service: '{{objectId()}}',
    workshift: '{{objectId()}}',
    createdBy: '{{objectId()}}'
  }
]
