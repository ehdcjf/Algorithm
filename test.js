const fs = require('fs');
const [n, ...arr] = fs.readFileSync("./dev/stdin").toString().trim().split("\r\n");
const N = +n;

class Node {
  constructor(item) {
    this.item = item;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(item) {
    const node = new Node(item);
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length += 1;
  }


  push_back(item) {
    const node = new Node(item)
    if (this.size() == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
  }

  pop_front() {
    if (this.size() == 0) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    if (this.size() == 1) {
      this.head = null;
    } else {
      this.head.prev = null;
    }
    this.length -= 1;
    return popItem.item;
  }

  pop_back() {
    if (this.size() == 0) return -1;
    const popItem = this.tail;
    this.tail = this.tail.prev;
    if (this.size() == 1) {
      this.tail = null;
    } else {
      this.tail.next = null;
    }
    this.length -= 1;
    return popItem.item;
  }


  size() {
    return this.length;
  }

  empty() {
    if (this.length == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.item;
  }
}


let answer = [];

for (let i = 0; i < N; i++) {
  let deque = new Deque();
  const command = arr.shift().split('');
  const leng = arr.shift();
  let type = true; //트루면 정방향, 펄스면 역방향;
  const data = JSON.parse(arr.shift())
  data.forEach(v => {
    deque.push_back(v);
  })
  let result;
  for (let i = 0; i < command.length; i++) {
    switch (command[i]) {
      case 'R':
        type = !type;
        break;
      case 'D':
        if (deque.empty()) {
          result = 'error';
          break;
        } else {
          if (type) {
            deque.pop_front();
          } else {
            deque.pop_back();
          }
        }
        break;
    }
  }

  if (result == 'error') {
    answer.push(result)
    continue;
  }
  result = [];
  if (type) {
    while (!deque.empty()) {
      result.push(deque.pop_front());
    }
  } else {
    while (!deque.empty()) {
      result.push(deque.pop_back());
    }
  }

  answer.push(JSON.stringify(result))
}

console.log(answer.join('\n'));













