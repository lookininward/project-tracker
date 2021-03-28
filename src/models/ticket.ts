export class Ticket {
  id: string;
  category: string; // 'unknown' | 'feature' | 'bug' | 'chore';
  stage: string;
  title: string;
  description: string;
  owner: any;
  color: string;
  [key: string]: string | string[];

  constructor({
    id = '',
    title = '', description = '',
    category = 'unknown',
    color = '',
    owner = '',
    stage = 'unscheduled'
  } = {}) {
    this.id = id;
    this.category = category;
    this.stage = stage;
    this.title = title;
    this.description = description;
    this.owner = owner;
    this.color = color;
  }

  get fields() {
    return [
      'id',
      'category',
      'stage',
      'title',
      'description',
      'owner',
      'color',
    ]
  }
}