// Sliding window limiter implementation

class SlidingWindowLimiter {
    constructor(limit, interval) {
        this.limit = limit;
        this.interval = interval;
        this.requests = [];
    }

    allowRequest() {
        const now = Date.now();
        this.requests = this.requests.filter(timestamp => now - timestamp < this.interval);
        if (this.requests.length < this.limit) {
            this.requests.push(now);
            return true;
        }
        return false;
    }
}

module.exports = SlidingWindowLimiter;