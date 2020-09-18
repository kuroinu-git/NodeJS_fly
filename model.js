//ใช้ lip
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fristName: String,
  lastName: String,
  email: {
    type: String,
    require: true,
    validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //fun , regular
    unique: true,  // สร้างซำ้ไม่ได้
  },
  age: Number,
  isBest: Boolean,
  friends: [String],
}); // Schema รับ obj  (ไม่ใช่ตัว Data)

const Student = mongoose.model('student', studentSchema); //สั่งให้ model //เป็นตัว document คุย กับ orm เรา
//'studen' => ประโยค singular

//connect  Database
mongoose
  .connect('mongodb://localhost:27017/playground', {
    useNewUrlParser: true, // ใส่ไม่ให้ เตือน ERROR eprecationWarning: current URL string parser
    useUnifiedTopology: true, //  DeprecationWarning: current Server Discovery and Monitoring
    autoIndex: true, // สร้างซำ้ไม่ได้
  }) //สนใจ uri ใช้ protocall 'mongodb' ใส่ localhost ของ mongo ใส่ data base

  .then(async () => {
    //.then  , promise
    console.log('connect success');

    const student1 = await Student.create({
      //obj , data จริง
      fristName: 'Man',
      lastName: 'SSSSS',
      email: 'test@test.com',
      age: 12,
      isBest: true,
    });
      console.log(student1)
    //   const student2 = await Student.create({
    //     //obj , data จริง
    //     fristName: 'Man',
    //     lastName: 'SSSSS',
    //     email: 'test@test.com',
    //     age: 12,
    //     isBest: true,
    //   });
    //     console.log(student2)
    // student1.friends.push('JJ');
    // student1.friends.push('man');
    // await student1.save();
     const foundStudent = await Student
          .findOne({ email: 'test@test.com' })
         .exec()
      
      console.log(foundStudent)
  })
  .catch((err) => {
    console.log('connect ERROR: ', err);
  });
