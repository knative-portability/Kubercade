import moment from 'moment';

interface DBRow {
  datetime: Date;
  fromNow?: string;
  ISOTime?: string;
}

/* Format times in from now and ISO notations. */
export const timeUtil = {
  formatTimes(array: DBRow[]): DBRow[] {
    array.forEach(row => {
      row.fromNow = moment(row.datetime).fromNow(); // e.g. 5 minutes ago
      row.ISOTime = row.datetime.toISOString(); // e.g. 2019-08-20T21:16:11.182Z
    });
    return array;
  },
};
