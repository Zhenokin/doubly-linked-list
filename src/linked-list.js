const Node = require('./node');

//[head](next)...(prev)[node](next)...(prev)[tail]

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;

    }

    append(data) {
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;

    }

    head() {
        if (!this.isEmpty()) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if (!this.isEmpty()) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        let currentNode = this._head;
        let count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }

        return currentNode.data;
    }

    //[head](pref)...(next)[node](pref)...(next)[tail]

    insertAt(index, data) {
        if (this.isEmpty()) {
            this.append(data);
        } else {
            let count = 0;
            let current = this._head;
            let currentPrev;
            while (count < index) {
                current = current.next;
                count++;
            }
            currentPrev = current.prev;
            const node = new Node(data, currentPrev, current);
            current.prev = node;
            currentPrev.next = node;
            this.length++;
        }
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        if (!this.isEmpty()) {
            let count = 0;
            let current = this._head;
            while (count < index) {
                current = current.next;
                count++;
            }
            if (current.prev) {
                current.prev.next = current.next;
            }
            if (current.next) {
                current.next.prev = current.prev;
            }
            this.length--;
        }
        return this;
    }

    reverse() {
        let temp;
        let current = this._head;

        for (var i = 0; i < this.length; i++) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = current.prev;
        }
        temp = this._head;
        this._head = this._tail;
        this._tail = temp;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        let count = 0;
        while (true) {
            if (current.data == data) {
                return count;
            }
            current = current.next;
            if (count == this.length - 1) {
                return -1;
            }
            count++;

        }
    }
}

module.exports = LinkedList;