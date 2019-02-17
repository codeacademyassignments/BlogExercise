import artifactApp from './Artifact.reducer';
import testData from '../RawData/RawData';
import {
  ADD_BLOG, INCREASE_CLAPS, TOGGLE_HEART_LIKE, SET_STATE, INITIALIZE_STATE,
} from '../Actions/Artifact.actions';

describe('ArtifactReducer', () => {
  it('should add blog to state passed', () => {
    const blog = {
      date: '2nd Januray, 2018',
      readingTime: '2 mins',
      title: 'The future of abstract art and the culture ...',
      description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
      claps: 10,
      liked: false,
      image: 'abstract.png',
    };
    expect(artifactApp([], { type: ADD_BLOG, blog }).blogs.length).toEqual(1);
    expect(artifactApp(undefined, { type: ADD_BLOG, blog }).blogs.length).toEqual(1);
  });
  it('should toggle liked on the passed index', () => {
    const blogs = [
      {
        date: '2nd Januray, 2018',
        readingTime: '2 mins',
        title: 'The future of abstract art and the culture ...',
        description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
        claps: 10,
        liked: false,
        image: 'abstract.png',
      },
      {
        date: '14nd Januray, 2018',
        readingTime: '6 mins',
        title: 'Top of abstract art and the culture ...',
        description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
        claps: 20,
        liked: false,
        image: 'abstract.png',
      },
    ];
    const index = 1;
    expect(artifactApp({ blogs }, { type: TOGGLE_HEART_LIKE, index }).blogs[index].liked).toEqual(
      !blogs[index].liked,
    );
  });
  it('should toggle liked on the passed index', () => {
    const blogs = [
      {
        date: '2nd Januray, 2018',
        readingTime: '2 mins',
        title: 'The future of abstract art and the culture ...',
        description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
        claps: 10,
        liked: false,
        image: 'abstract.png',
      },
      {
        date: '14nd Januray, 2018',
        readingTime: '6 mins',
        title: 'Top of abstract art and the culture ...',
        description: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...',
        claps: 20,
        liked: false,
        image: 'abstract.png',
      },
    ];
    const index = 1;
    expect(artifactApp({ blogs }, { type: INCREASE_CLAPS, index }).blogs[index].claps).toEqual(
      blogs[index].claps + 1,
    );
  });
  it('should set the fetchState of store', () => {
    expect(artifactApp(false, { type: SET_STATE }).fetchState).toEqual(true);
  });
  it('should initialize the store with passed blog data', () => {
    expect(artifactApp([testData[0]], { type: INITIALIZE_STATE, blogs: testData }).blogs).toEqual(testData);
  });
});
