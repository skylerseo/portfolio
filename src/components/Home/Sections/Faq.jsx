import React from 'react'
import '../../../main.css'

const Faq = (props) => {
  return (
    <section className='faq'>
      <h2>FAQ</h2>
      <div className='bundle'>
        <h3>Why did you choose to be a front-end developer?</h3>
        <p>
          Before starting my career, I majored in Game graphics.
          <br />
          While in university, I gained an interest in programming, so I spent an additional 2 more years studying
          programming post graduation.
          <br />
          I personally think of myself as an enterprising minded worker, who seeks for self development and higher
          achievement.
          <br />I aspire to fulfill such value, so I decided to apply for your company.
        </p>
      </div>
      <div className='bundle'>
        <h3>1. 어떤 회사를 찾고 있나요?</h3>
        <p>
          함께 성장해나갈 수 있는, 서로에게 좋은 영향을 줄 수 있는 회사를 찾고 있습니다.
          <br />
          의사소통을 중요시 여겨 서로 귀기울여듣고 발전해나가는 관계가 되었으면 좋겠습니다.
        </p>
      </div>
      <div className='bundle'>
        <h3>2. 업무 관련 경험이 있나요?</h3>
        <p>
          약 1년간 리액트를 활용한 프론트엔드 실무를 담당하였습니다.
          <br />
          쇼핑몰/인터넷 강의 웹사이트 퍼블리싱, Axios를 활용한 API 연결 등, 프론트단 기능구현 및 유지보수 업무를
          수행하였습니다.
        </p>
      </div>
      <div className='bundle'>
        <h3>3. 입사 후 포부?</h3>
        <p>
          저의 꼼꼼한 성격에 기인한 가독성 좋은 깔끔한 코드,
          <br />
          수년간 갈고 닦아온 미적 감각으로 서로 도와가며 하나에만 치우치지 않은 다양한 작업들을 하고 싶습니다.
          <br />더 나아지고자 하는 마음, 예리한 관찰력으로 미래의 팀원들에게도 도움이 되고 싶습니다.
          <br />
          배움에는 끝이 없으며, 누구든지 항상 서로에게 배울 것이 있다고 생각합니다.
        </p>
      </div>
      <div className='bundle'>
        <h3>4. 언제부터 지금의 직무에 관심을 갖게 되었나요?</h3>
        <p>
          늘 상호작용을 중요시해왔습니다.
          <br />
          그로 인해 게임제작에 관심을 가져 대학도 그 쪽 전공으로 졸업하게 되었습니다.
          <br />
          어릴 때부터 손재주가 있어 게임그래픽 학과로 진학하였으나,
          <br />
          재학 중 게임프로그래밍 학과에도 많은 관심을 가지게 되었습니다.
          <br />
          졸업 후 프로그래밍에 대하여 더 알아보게 되었고 웹개발에 관심을 가져 따로 공부하게 되었습니다.
        </p>
      </div>
      <div className='bundle'>
        <h3>5. 성격의 장단점이 있나요?</h3>
        <p>
          제 장점은 후진 없이 직진하는 적극적인 성격입니다.
          <br />
          선택을 망설이지 않는 편이고, 긍정적으로 생각하고 행동하는 것을 습관화하기 위해 꾸준히 노력해오고 있습니다.
          <br />
          반면 완벽주의가 조금 있고 센스가 극단적이라는 것이 제 단점입니다.
          <br />
          주변인의 적절한 조언을 필요로 할 때가 있으며 이는 지속적인 피드백으로 조율하고 있습니다.
        </p>
      </div>
      <hr className='devider' />
    </section>
  )
}

export default Faq
