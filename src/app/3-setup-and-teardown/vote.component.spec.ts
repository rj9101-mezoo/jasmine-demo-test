import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;

  //각각의 test가 실행되기 전에 실행한다.
  beforeEach(() => {
    component = new VoteComponent(); //Arrange
  })

  afterEach(() => {}) //각각의 test가 실행되고난 후 실행된다
  afterAll(() => {}) //모든 test가 실행되고 난 후 실행된다
  beforeAll(() => {}) //모든 test가 실행되기 전에 실행된다.

  it('should increment totalVotes when upvoted', () => {
    
    component.upVote(); //Act
    expect(component.totalVotes).toBe(1); //Assert
  });

  it('should decrement totalVotes when downvoted', () => {
    
    component.downVote(); //Act
    expect(component.totalVotes).toBe(-1); //Assert
  });
});