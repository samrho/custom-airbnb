## **master class**

### **JWT**

-   가장 중요한 점, **바꿀 수가 없다**는 점
    -   세션을 대체할 수 있다.
    -   sessionDB가 따로 필요가 없다.
        -   개발하기가 쉬워진다.
-   저장 방법(찬반이 다 있다..)
    -   cookie에 저장(그럼 똑같은 거 아니냐? nope, 변조가 되지 않기 때문에)
    -   localStorage에 저장을 하는 방법이 있다.
-   logout은? 만료시켜버리면 된다.
-   [참고](https://lazyhoneyant.tistory.com/7)

### **ORM(Sequelize)**

-   개발 생산성이 높아진다
-   ORM을 쓰면 성능이 좋아지지 않는다?
    -   nope, 잘못 쓰고 있기 때문이다.
-   sequelize의 promise는 [bluebird promise](http://bluebirdjs.com/docs/getting-started.html)이기 때문에 참 좋다.
-   [공식 문서](https://sequelize.org/)
-   up, down(commit, rollback)할 때..
-   table 관계는 association으로 지정해줄 수가 있다.
-   User.js에는 User 정보만 있고, Assoc.js 같은 곳에 모아서 관계를 정의해주는 것이 좋다.

### **Transaction**

-   index가 있으면 O(_logN_)만에 접근 可能
-   CAP 이론 가운데 다 만족시킬 수 없어
-   **lost update problem**
    -   락을 걸지 않는 DB가 있다? 속도..
    -   그 어떤 DB도 lost update problem은 발생하지 않는다.

### **server architecture에 대한 생각**

-   서버 1대 운영
    -   많이 위험하다. 그러면 안 돼.
    -   apache(NginX)를 앞단에 proxy로 두면 좀 더 나아져(성능, 보안 등)
    -   single point of failure
        -   매일 백업을 해 주어야 한다. 복구에 대해서는 생각을 잘 안 하는..
        -   data가 날아간다..
        -   cf) RTO
    -   NginX
        -   reverse proxy
-   서버 2대 운영
    -   NginX + Node.js
    -   DBMS 분리
-

### **React**

-   [참고](https://velopert.com/3613)
-   React와 express 연동 [참고](https://basketdeveloper.tistory.com/52)

## implementation

### **해야 할 것들**

-   TDD
-   ReactJS + GraphQL + Apollo + Jest + NodeJS + Express + Sequelize
-   Redis caching + JWT(JSON WEB TOKEN)
-   JWT
-   batchJob
-   Cloud and Web architecture
-   nginx가 왜 필요한지?

### **해볼 것들(optional)**

-   elastic search
-   stress test

### **염두에 두어야 할 것들**
