import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteCHanged event when upvoted', () => {
    let totalVotes: number = 0;
    component.voteChanged.subscribe(tv => totalVotes = tv); //eventemitter는 observable이다

    component.upVote();

    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});