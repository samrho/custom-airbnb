## **master class**

### **JWT**

-   JWT 저장 위치에 따른 취약점
    -   localStorage : XSS(Cross Site Scripting)
    -   Cookie : CSRF (Cross Site Request Forgery)
-   대처법
    -   `http-only`
    -   `secure`

### **lazy loading**

### **공부할 것**

-   Redis - 강대명
-   [Docker][docker], [Nginx][]
-   [React][react]

[//]: <#website list>

## **code review**

### ss47

-   schema에서 진짜 unique하더라도 unique keyword 사용은 자제한다. 내부적으로 index를 만들어 버리기 때문이다.
-   text는 게시판 정도의 길이를 저장할 때 사용한다.
-   혜주 코드에서.. getAllRooms() 안에 query가 하나 들어 있는데.. 잘 한 건가?
    -   이런 거는 어떨 때 사용하나?
        -   transaction을 쓸 때
        -   복잡한 query를 날릴 때
    -   가독성이 좋아지는 모든 행동은 좋은 행동(?)

## **Alumni Talk**

1. ...
    - 부스트캠프는 이러이러해서 좋다는 말을 하고 있다.
    - 멘토링, 개발 공간
    - 기록을 하자.
2. 소통과 협업
    - 협업이 왜 중요하냐
    - 협업을 잘 할 수 있는 방법
        - **pair programming** matters!
    - 마음가짐 -
3. 네트워킹데이

    - 팀발표 시간
    - 어떻게 준비를 하면 좋을까?
    - 기획, 디자인보단 개발.. 시연에 오시는 분들은 **개발자**
    - 개발 능력을 잘 보여줄 수 있는
    - **클론 프로젝트**도 좋은 평가를 받는다
    - **포인트**를 주자
    - 깃헙에 잘 기록될 수 있도록 하자.

[react]: https://reactjs.org/
[docker]: https://seokjun.kim/docker-nginx-node/
[nginx]: https://www.nginx.com/
