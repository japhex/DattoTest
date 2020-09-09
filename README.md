## Stack

I've used the following to complete the test:

- [Create React App](https://github.com/facebook/create-react-app) - purely for speed purposes, I favour [Next.js](https://nextjs.org/) for my personal projects but did not want to add bloat or hide anything as it helps a lot with some basics!
- [styled-components](https://styled-components.com/) - generally my go-to for styling nowadays within the apps I build
- [react-query](https://github.com/tannerlinsley/react-query) - This I've heard a lot about recently from a couple of colleagues and in honesty wanted to try it out, I'm barely using it and it could easily be ommitted! I'm planning on delving deeper into it's caching etc. but what I do like is its implementation, its very similar to how apollo's hooks work with GraphQL and I've loved working with those
- [prettier](https://prettier.io/) - standard again on all of my projects to tidy and align code to all be the same standards 

## My thinking

### General
I've followed the instructions and ensured that the test meets all of the criteria. It may seem a bit overkill in places, but I've endeavoured to start the test as if it was an app that would begin to scale out. So getting things like theming and re-usable utils working when you see a use case for them in the future is always useful.

### State management

Again for the perspective of speed and simplicity, I've opted to just use React Context in its purest form. I absolutely could've used Redux but for the amount of boilerplate code and the fact that we're only dealing with 1 store object here, I didn't deem it necessary. The downside is that the current state of the application isn't persisted through refreshes, but it is persisted through app use - so you can alter the state and navigate through the 2 nav options whilst still maintaining it. A more robust solution if the data were to be persisted and shared between the application would certainly be redux and/or an actual backend with stored data.

### Responsive

I made the decision to do a hybrid at tablet here, the instruction stipulates that the logo should only reduce for mobile devices. You'll notice that the width of the film blocks change at tablet **and** mobile, and ideally I wanted the logo to do the same, the only reason it isn't is because you guys have stipulated **only** mobile.

You'll notice the navigation doesn't do anything at mobile/tablet breakpoints - I haven't wired this up to display/hide etc. I just wanted to demonstrate that I had thought about it and also include a mechanism to detect screen size in components and conditionally render code. 

### Testing

I haven't included any tests with the app, I'm not sure if this is something that is expected or not - **if it is, I'm more than happy to go away and add some**. There isn't really any logic involved in pure functions, so unit tests would not have a huge place aside from some of the functions in the styled components files. Likewise I could create some snapshot/screenshot style tests for the components themselves - this is usually an informed decision made around how useful they will be and how much the app and its components will change over time.  

### Types

I've been working heavily with Typescript for the past 1.5 years and have integrated it into some of my personal projects too (see [NextHeroes](https://github.com/japhex/NextHeroes)). Again as we were only dealing with 1 endpoint here and essentially a simple application to start, I didn't want to muddy it with interfaces and typings all over the place, but if this was an app that was going to scale and introduce more then it would be a welcomed addition!

## Closing

If there is anything that is unclear please do not hesitate to reach out, this is the kind of test that you can easily spend **a lot** of time on, I'm hoping I've completed enough to show my thinking and approach to certain things, but also demonstrate clear experience in working with React and the frameworks used.

Thanks!

The app is deployed on [Vercel](https://vercel.com/) here for ease of use [https://datto-test.vercel.app](https://datto-test.vercel.app)