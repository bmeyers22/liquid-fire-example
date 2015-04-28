export default function(){
  this.transition(
    this.debug(),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );
};
