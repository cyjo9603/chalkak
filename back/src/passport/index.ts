import passport from 'passport';
import User from '../../models/user';

export default () => {
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e);
    }
  });
};
