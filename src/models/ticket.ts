export class Ticket {
  id: string;
  title: string;
  category: string; // 'unknown' | 'feature' | 'bug' | 'chore';
  color: string;
  owners: string[];
  stage: string;
  [key: string]: string | string[];

  constructor({ id = '', title = '', category = 'unknown', color = '', owners = [], stage = 'unscheduled' } = {}) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.color = color;
    this.owners = owners;
    this.stage = stage;
  }

  get fields() {
    return [
      'id',
      'category',
      'title',
      'color',
      'stage',
    ]
  }
}