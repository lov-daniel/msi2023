# Priority Queue

Contributors
--
- Yunshan Li (First Year CS Major)
- Byron Chan (Fourth Year CE Major)
- Daniel Lov (First Year CS Major)

Problem
--
At UC San Diego, the Trition Esports Cafe often experiences a large amount of traffic and a solution is required to remedy this issue. How can we solve this in a scalable and streamline manner?

![Alt text](https://lh3.googleusercontent.com/p/AF1QipMruZiZX6rRSTMla-ayJ-_oF2jyCrAcN5GmbTIk=s1360-w1360-h1020) [^2]

Solution
--
A web server was developed in order to remedy this issue. A combination of HTML and Javascript was used to create two separate UIs: 
- A panel that would allow the individuals to select a computer to reserve.
- An admin panel that would allow the user to make changes to the lay out of the grids used within the Triton Esports Center

(insert screen shot of web server)

We also implemented a queue system that places excess users into a queue. A threshold is then implemented in order to accomodate for the excessive traffic[^3]. This queue will start allowing individuals into the Trition Esports Center if it meets at least one of two conditions:
- A computer has opened up as a result of a user logging off.
- A user has been logged off by the queuing system as a result of meeting or surpassing the threshold.

Language Stack
--
- Python [^1]
- HTML
- Javascript
- CSS


Footnotes
--
[^1]: Flask Framework was used along with standard Python.
[^2]: Image of Triton Esports Center provided by Google
[^3]: The value of the threshold is customizable within the admin panel.