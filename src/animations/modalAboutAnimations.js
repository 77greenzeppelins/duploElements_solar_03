import { gsap, set, to } from 'gsap';
//open model
const modalOn = (container, line1, line2, closeButton) => {
  gsap.killTweensOf(container, line1, line2);
  const modalAboutAnimationOnTl = gsap.timeline({
    // onComplete: revealModelContent,
    // onCompleteParams: [line1, line2],
  });
  modalAboutAnimationOnTl
    .set(container, { display: 'flex', flexDirection: 'column', xPercent: 0 })
    .set(line1, { opacity: 0, yPercent: -100 })
    .set(line2, { opacity: 0, rotateX: 90 })
    .set(closeButton, { opacity: 0 })
    .to(container, {
      duration: 0.3,
      opacity: 1,
    })
    .to(line1, { duration: 1, opacity: 1, yPercent: 0 })
    .to(line2, { duration: 1.5, opacity: 1, rotateX: 0 }, '>')
    .to(closeButton, { duration: 1, opacity: 1 });
  console.log(
    `%c <ModalAbout> / modalAboutAnimationOn = user clicked to open the modal `,
    'color: #e65c00'
  );
  console.log(
    `%c <ModalAbout> / modalAboutAnimationOn / container `,
    'color: #e65c00',
    container
  );
};
// expand modal content
// const revealModelContent = (line1, line2) => {
//   const modalContentTl = gsap.timeline();
//   modalContentTl
// .set(line1, { opacity: 0, yPercent: -100 })
// .set(line2, { opacity: 0, rotateX: 90 })
// .to(line1, { duration: 5, opacity: 1, yPercent: 0 })
// .to(line2, { duration: 5.5, opacity: 1, rotateX: 0 }, '>');
//
//     .to(line1, { duration: 15, color: 'yellow' })
//     .to(line2, { duration: 10, color: 'yellow' }, '>');
//   return modalContentTl;
// };

// const modalBodyTl = gsap.timeline();
// modalBodyTl
//   .set(modalBodyLine1.current, { opacity: 0, yPercent: -100 })
//   .set(modalBodyLine2.current, { opacity: 0, rotateX: 90 })
//   .to(modalBodyLine1.current, { duration: 1, opacity: 1, yPercent: 0 })
//   .to(modalBodyLine2.current, { duration: 1.5, opacity: 1, rotateX: 0 }, '>')
//   .pause();
// isModalVisible
//   ? modalBodyTl.play()
//   : gsap.killTweensOf([modalBodyLine1.current, modalBodyLine2.current]);

//close model
const modalOff = (container, line1, line2) => {
  gsap.killTweensOf(container, line1, line2);
  const modalAboutAnimationOffTl = gsap.timeline();
  modalAboutAnimationOffTl
    .to(container, {
      duration: 0.3,
      opacity: 1,
      // backgroundColor: 'red',
    })
    .to(container, {
      duration: 0.3,
      opacity: 0,
    })
    .to(
      container,
      {
        duration: 0.1,
        xPercent: 100,
      },
      '+=1'
    )
    .set(container, { display: 'none' });
  console.log(
    `%c <ModalAbout> / modalAboutAnimationOff =  user clicked to close the modal `,
    'color: #e65c00'
  );
};
export { modalOn, modalOff };
