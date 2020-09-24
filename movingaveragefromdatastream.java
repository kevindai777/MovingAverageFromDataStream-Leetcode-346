//Java Solution

class MovingAverage {

    /** Initialize your data structure here. */
    int sum;
    int length;
    Deque queue;
    public MovingAverage(int size) {
        sum = 0;
        length = size;
        queue = new ArrayDeque<Integer>();
    }
    
    public double next(int val) {
        sum += val;
        queue.add(val);
        
        if (queue.size() > length) {
            sum -= (int) queue.removeFirst();
        }
        
        return (double) sum / queue.size();
    }
}