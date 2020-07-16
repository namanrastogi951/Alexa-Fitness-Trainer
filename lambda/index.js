// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
// const data = require ('./data/intro.json');
      //  const template = require ('./template/intro.json');
    //  const GameOn = require('./GameOn.js');
     var score  = 0;


 //const {DynamoDbPersistenceAdapter} = require('ask-sdk-dynamodb-persistence-adapter');
//const persistenceAdapter = new DynamoDbPersistenceAdapter({
  //tableName: 'leaderboards',
 // createTable: true
// });


const LaunchRequestHandler = {
    canHandle(handlerInput) {
       
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
      handle(handlerInput) {
    
   
 //   let player = await this.getPersistentAttributesManager;

    // Bootstrap new users by registering them with GameOn and persisting to DynamoDb
  //  if (Object.keys(player).length === 0) {
  //    player = await GameOn.newPlayer();
  //  } else {
 //     player = await GameOn.refreshPlayerSession(player);
//    }
 //   this.setPersistentAttributes(player);
//    await this.savePersistentAttributes();
    
  //  const profile = GameOn.lookupPlayerProfile(player.externalPlayerId);
//    await GameOn.submitScore(player, 0);

         
         
        const speakOutput = 'Good Morning, i am your fitness trainer! '+'You can ask me for Meditation ,'+ 'Surya Namaskar ,' +' Warmup ,'+' Abs , Cardio , Muscle ,Strength workouts , ' +' and Diet'+' you will be awarded points at each segment!!  You can also ask me for your score and leaderboards .'+' what do you want to choose ? ';
       
        return handlerInput.responseBuilder
            .speak(speakOutput)
          //  .withSimpleCard('fitness trainer',speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const MeditationIntentHandler = {
    canHandle(handlerInput) {
         this.handlerInput = handlerInput;
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MeditationIntent';
    },
    handle(handlerInput) {
           score  = score +10;
    //     this.handlerInput = handlerInput;
  //        const player = await this.getPersistentAttributesManager;
        let clip2 ='https://randomise1234.s3.ap-south-1.amazonaws.com/meditation+main+1.mp3';
    //    const template= require ('./template/meditation.json');
    //    const data= require ('./data/meditation.json');
           
     //   await GameOn.submitScore(player, score);
     //     const playerScore = await GameOn.getPlayerScore(player);
        
        let speakOutput = 'Great !! ,just close your eyes '+   '<break time="1s"/>'  +'and sit in a  meditative posture for five minutes and i will play some soothing music for you !!  ';
        speakOutput+= '<audio src="' + clip2 +'"/>';
 //   const repromptOutput = `${playerScore.rank}`;
     let repromptOutput = 'Great , you completed meditation .'  +    '<break time="1s"/>'  ;
       
        
   
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const SuryaNamaskarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SuryaNamaskarIntent';
    },
    handle(handlerInput) {
           score  = score +25;
     //   const data= require ('./data/surya1.json');
     
        const speakOutput = 'Great!! Lets begin Surya Namaskar '+   '<break time="1s"/>' +
        ' Step 1 '+   '<break time="1s"/>' +'Prayer Pose'+   '<break time="1s"/>' +' Stand upright on a yoga mat with feet closely aligned with each other. Take a deep breath, expand your chest, and relax your shoulders. While you inhale, raise your arms  ,and as you exhale fold the hands in prayer position before your heart. It is the first namaskar towards the sun.'+   '<break time="10s"/>' +
        'Step 2 '+   '<break time="1s"/>' +'Raised Arm Pose '+   '<break time="1s"/>' +'Retain the previous position. Upon inhalation, lift your arms up and slightly lean backward. Ensure your biceps are close to your ears. Try to stretch your whole body. The stretching loosens up the knots in the entire body.'+   '<break time="10s"/>' +
        'Step 3 '+   '<break time="1s"/>' +'Standing Forward Bend '+   '<break time="1s"/>' + 'As you exhale; bend forward at the hip and bring your arms downwards. Place the hands beside your feet. Make sure your knees are straight and spine is erect. The pose strengthens the back, abdominal muscles, and nervous system.'+   '<break time="10s"/>' +
        'Step 4 '+   '<break time="1s"/>' + 'Equestrian Pose' +   '<break time="1s"/>' +'Inhale, extend your left leg behind as far as possible. Now, fold your right knee and place it close towards the right part of the chest. Keep your hands on the floor and spread the fingers. Look up and bend your neck slightly backward. This posture provides psychical benefits and increases flexibility in the legs.'+   '<break time="10s"/>' +
        'Step 5 '+   '<break time="1s"/>' +'Staff Pose '+   '<break time="1s"/>' +'Breathe in, stretch your right leg behind and bring your body into a straight line. Keep your body parallel to the floor. A great pose that tones the wrists, legs, arms, and prepares the practitioner for more challenging arm balances.'+   '<break time="10s"/>' +
        'Step 6 '+   '<break time="1s"/>' + 'Salute With Eight parts'+   '<break time="1s"/>' +'Slowly bring your knees to the floor and breathe out. Rest your chin, chest, hands, feet on the ground and raise your hips and abdomen high. This yoga asana makes the chest muscles and hands strong.'+   '<break time="10s"/>' +
        'Step 7 '+   '<break time="1s"/>' +'Cobra Pose :'+   '<break time="1s"/>' +'Tuck your elbows to the side of your body. Press your palms into the mat and lift your chest and head off the ground. Rotate your shoulder blades away from the ears and arch your neck backward. Gaze in an upward direction. It is a perfect pose to treat a headache and a backache.'+   '<break time="10s"/>' +
        'Step 8 '+   '<break time="1s"/>' +'Downward Facing Dog Pose '+   '<break time="1s"/>' +'Transform into the downward dog from Bhujangasana by elevating your hips up, keeping the heels on the ground, and making an inverted-V with your body. This yoga asana rewards the practitioners with multiple benefits such as relief from stress, improved circulation, enhanced respiration, better posture, to name a few.'+   '<break time="10s"/>' +
        'Step 9 '+   '<break time="1s"/>' + ' Equestrian Pose'+   '<break time="1s"/>' +' Turn into equestrian pose from adho mukha svanasana. Repeat the step (4) again but with the opposite side. Inhale, bring your left foot forward and place it between your hands and then rest your left knee on the ground. Look upward towards the ceiling'+   '<break time="10s"/>' +
        'Step 10 '+   '<break time="1s"/>' + 'Hand To Foot Pose'+   '<break time="1s"/>' +' Gently bring your right foot next to your left foot. Keeping the position of your hands intact, lift your body upward and slowly come into an Hasta Padasana Posture.'+   '<break time="10s"/>' +
        'Step 11 '+   '<break time="1s"/>' +' Raise Arm Pose '+   '<break time="1s"/>' + '  Take a deep inhalation, stretch your arms up overhead, slightly arch your back. Try to stretch your body upward instead of backward and keep your biceps close to your ears'+   '<break time="10s"/>' +
        'Step 12 '+ +   '<break time="1s"/>' + 'Mountain Pose '+   '<break time="1s"/>' +'Finally, exhale, bring your arms down and stand upright in a relaxed manner. Feel the positive vibrations within your body and mind. Experience an unparalleled serenity and refreshment'+   '<break time="10s"/>'     ;
    
        const repromptOutput = ' Great !! You completed Surya Namaskar. ' ;
         
          
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};


const WarmupIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'WarmupIntent';
    },
    handle(handlerInput) {
          score  = score +10;
        let repromptOutput ;
      
        const speakOutput = 'Great!!! '+   '<break time="1s"/>'  +' lets start the workout!! ' ;
        let clip3 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/warmup.mp3';
          score  = score +10;
       // let clip4 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/workout2.mp3';
       const exercise =['first warmup is '+'<break time="1s"/>'  +'jogging at the same place'+ '<break time="1s"/>'  +   'start '+ '<audio src="' + clip3 +'"/>'  +  'stop'
          +  '<break time="2s"/>'+ ' Second  warmup is '+ '<break time="1s"/>' +'  skipping without rope '+ '<break time="1s"/>'+ 'start '+'<audio src="' + clip3 +'"/>'+ 'stop '+  '<break time="2s"/>'+
         'Last Warmup is '+ '<break time="1s"/>' +' Toe touches '+ '<break time="1s"/>' +' Step 1 '+ '<break time="1s"/>' +' Stand straight. Bend and touch your toes with your fingers'+'<audio src="' + clip3 +'"/>'  +  'stop'
           ];
 //      let i;
  //     for(i=0;i<=2;i++){
       
      repromptOutput = `${exercise[0]}`
       repromptOutput+= 'Great !! You completed the warmup . ';
     
    //   }
     
        
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const AbsWorkoutIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AbsWorkoutIntent';
    },
    handle(handlerInput) {
          score  = score +10;
                let clip4 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/warmup.mp3';
                 
        const speakOutput = 'Great!! Lets start Abs Workout '+   '<break time="1s"/>'  +'First one is Jumping Jacks '+   '<break time="1s"/>'  +' Step 1 '+   '<break time="1s"/>'  +' Stand tall with your feet together and your hands at your sides'+   '<break time="1s"/>'   + ' Step 2 '+   '<break time="1s"/>'  +'Quickly raise your arms above your head while jumping your feet out to the sides '+   '<break time="1s"/>'  +' Immediately reverse the movement to jump back to the standing position '+   '<break time="1s"/>'  + 'Start' + '<audio src="' + clip4 +'"/>'  +  'stop' +
           '<break time="2s"/>'  +'Good  ' + '<break time="2s"/>'  +'second one is Planks '+   '<break time="2s"/>'  +' Step 1  '+   '<break time="1s"/>'  +' Assume a standard push-up position'+   '<break time="1s"/>'  +'Except instead of resting your weight on your hands '+'<break time="1s"/>'+' place your elbows and forearms flat on the floor  '+   '<break time="1s"/>'   +'Step 2 '+   '<break time="1s"/>'  +' Begin exercise by raising hips '+   '<break time="1s"/>'  +'so that your entire body from your heels to your head is in a straight line'+   '<break time="1s"/>'  +' Hold this position for at least 30 seconds'+   '<break time="1s"/>'  +' Brace your core as if you were about to be punched in the gut and breath deeply throughout'+   '<break time="1s"/>'  +   'start '+ '<audio src="' + clip4 +'"/>'  +  'stop'+
            '<break time="2s"/> '+ 'Third exercise is crunches  ' + '<break time="1s"/>' + ' Step 1  ' + '<break time="1s"/>' + ' Lie flat on your back and place your hands behind your head. ' + '<break time="1s"/>' + 'And bend your knees so that your feet is on the floor '+ '<break time="1s"/> '+ ' Step 2' +  '<break time="1s"/> '+ ' lift your shoulders and upper back off of the floor' +  '<break time="1s"/> '+ 'then retract back down to starting position.'+   '<break time="1s"/>'  +'Start '+'<audio src="' + clip4 +'"/>'  +  'stop'+
            '<break time="2s"/>' + ' Last exercise is V ups '+'<break time="1s"/>'+ 'Step 1'+ '<break time="1s"/>'+ ' Lie on your back with your arms and legs extended and your legs squeezed together.'+ '<break time="1s"/>'+ 'Step 2 '+' <break time="2s"/>'+ 'Raise your upper body and legs , use your arms to touch your toes .'+ '<break time="1s"/>'+ '<audio src="' + clip4 +'"/>'  +  'stop';
       
        
    const     repromptOutput = 'Good !! Keep going  .'
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const CardioWorkoutIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CardioWorkoutIntent';
    },
    handle(handlerInput) {
           score  = score +10;
        let clip5 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/warmup.mp3';
      // st template= require ('./template/cardio.json');
        const speakOutput = ' Great !! Lets start the cardio workout '+   '<break time="1s"/>'+ 'First one is Mountain Climber '+   '<break time="1s"/>' + ' Start in the push-up position with your arms completely straight and '+   '<break time="1s"/>' + '  directly beneath your shoulders.  '+   '<break time="1s"/>' + ' Squeeze your abs, lift one foot off the floor and bring your knee up towards your chest while keeping your body in as straight of a line as possible. Return to the starting position and repeat the movement with your opposite leg.' + ' start '+'<audio src="' + clip5 +'"/>'  +  'stop' +
     '<break time="2s"/>'+'Second One is knee lift lunge  '+   '<break time="1s"/>'+ 'Step 1 '+   '<break time="1s"/>'+ ' stand straight with your legs hip-width apart. Raise your right knee and grab the kneecap with both hands, pulling it towards your chest. '+   '<break time="1s"/>'+ 'Step 2 '+   '<break time="1s"/>'+ 'Release it and take a step forward with the right leg and lower your body to a lunge position.'+ ' start '+'<audio src="' + clip5 +'"/>'  +  'stop'        
    +  '<break time="2s"/>'+ 'Third one is push ups ' + '<break time="1s"/>' + ' Step 1 '+  '<break time="1s"/>' +' place  your hands and feet  on the floor slightly wider than shoulder-width apart '+  '<break time="1s"/>'+ ' Step 2 '+ '<break time="1s"/>'+' Lower your body until your chest nearly touches the floor '+ '<break time="1s"/>'+' then push yourself back to the starting position .'+ 'Start '+'<audio src="' + clip5 +'"/>'  +  'stop'
     + '<break time="2s"/>'+ ' Fourth one is Cobra stretch'  +  '<break time="1s"/>'+ 'Step 1'  +  '<break time="1s"/>'+ ' Start with lying on the floor with your face down and palms under the shoulders. Bend your spine upwards to the chin and form an elevated angle'+ '<break time="1s"/>'+ 'Start '+'<audio src="' + clip5 +'"/>'  +  'stop'+ '<break time="1s"/>';
          score  = score +10;
      const  repromptOutput = ' Great !! You completed the cardio workout .';
     
     
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const MuscleWorkoutIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MuscleWorkoutIntent';
    },
    handle(handlerInput) {
           score  = score +10;
         let clip6 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/warmup.mp3';
 
      
        const speakOutput = 'Great!! Lets begin Muscle Workout First one is Shoulder Circles '+  '<break time="2s"/>'  +' Step 1  '+   '<break time="1s"/>'  +' Stand upright with your feet shoulder width apart . '+   '<break time="1s"/>'  +' and your arms hanging loosely by your sides  '+   '<break time="1s"/>'  +' This is your starting position .'+   '<break time="1s"/>'  +'Step 2 '+   '<break time="1s"/>'  +' Move your shoulders in a circle like fashion, bringing them backward, upward, forward, and then downward to the starting position '+   '<break time="1s"/>'  +'Step 3  '  +   'start  '+ '<audio src="' + clip6 +'"/>'     +' stop'+   '<break time="1s"/>' +
             '<break time="2s"/>' + 'Second  one is Arm Circles '+   '<break time="2s"/>'  +' Step 1  '+   '<break time="1s"/>'  +' Stand straight up with your arms extended out to each side, parallel to the ground  '+   '<break time="1s"/>'   +'Step 2 '+   '<break time="1s"/>'  +' Bring your arms slightly forward, upward, and then backward, making 12 inch circles with your arms '+   '<break time="1s"/>'  +   'start '+ '<audio src="' + clip6 +'"/>'  +  'stop'+
              '<break time="2s"/>' + 'Third one is punches '+   '<break time="2s"/>'  +' Step 1  '+   '<break time="1s"/>'  +' Stand with one of your legs forward and your knees bent slightly.Bend your elbows and clentch your fists in front of your face .' + 'Step 2 '+   '<break time="1s"/>'  +' Exttend one arm forward with the palm facing the floor.Take the arm back and repeat with the other arm.'+   '<break time="1s"/>' + 'Start '+'<audio src="' + clip6 +'"/>'  +  'stop' +
             '<break time="2s"/>' +  'Last one is burpees '+   '<break time="1s"/>' + ' Step 1'+ 'Stand with your feet shoulder width aparrt ,the put your hands on the ground and kick your feet backward.'+ 'Do a quick push up and then jump up.'+    '<break time="1s"/>' +   'start '+ '<audio src="' + clip6 +'"/>'  +  'stop';
             const  repromptOutput = ' Great !! You completed the Muscle workout .  ';
       
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const StrengthWorkoutIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'StrengthWorkoutIntent';
    },
    handle(handlerInput) {
          score  = score +10;
            let clip7 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/warmup.mp3';
   
        const speakOutput = ' Great !! Lets start the workout  '+   '<break time="1s"/>'  +' First one is Squats  '+   '<break time="1s"/>'   +' Step 1  '+   '<break time="1s"/>'  +'Start straight and keep your arms in front of you at chest height to help maintain balance'+   '<break time="1s"/>'  +'Except instead of resting your weight on your hands '+'<break time="1s"/>'+' place your elbows and forearms flat on the floor  '+   '<break time="1s"/>'   +'Step 2 '+   '<break time="1s"/>'  +'Drop your hips and sit back until your thighs are parallel with the floor '+   '<break time="1s"/>'  +'so that your entire body from your heels to your head is in a straight line'+   '<break time="1s"/>'+   'start '+ '<audio src="' + clip7 +'"/>'  +  'stop' +
          '<break time="2s"/>'  +' Second  one is Jumping  Squats  '+   '<break time="1s"/>'   +' Step 1  '+   '<break time="1s"/>'  + 'Start in the  squats position and jump up . '+ '<break time="1s"/>' + 'Start '+'<audio src="' + clip7 +'"/>'  +  'stop' 
       const repromptOutput = 'Great!! I am  impressed .  you completed the strength workout .'
         
        
      
        return handlerInput.responseBuilder
            .speak(speakOutput+ repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const DietIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DietIntent';
    },
    handle(handlerInput) {
          score  = score +15;
 
         let clip10 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/drum+roll.mp3';
        const diet = [
            'have a protien shake and peanut butter along with bread in the morning '+   '<break time="1s"/>'  +' and have meat balls in the afternoon '+   '<break time="1s"/>'  +' and grilled chicken in the night ',
            'have a protein shake and oats along with bananas in the morning '+   '<break time="1s"/>'  +' and have grilled veggies in the afternoon '+   '<break time="1s"/>'  +' and have a cup of brown rice in the night ',
            'have an oat meal with chopped almonds and along with that have two bananas in the morning '+   '<break time="1s"/>'  +' and have grilled tofu and grilled panner in the afternoon '+   '<break time="1s"/>'  +'and make sure to end your day with lots of fruits',
            'have four eggs along with protein pancake in the morning '+   '<break time="1s"/>'  +'and have a veggie salad in the afternoon and end your day with herbs ',
            'have one ounce of chia seeds and drink a smoothie in the morning '+   '<break time="1s"/>'  +' and have grilled chicken in the afternoon '+   '<break time="1s"/>'  +'and have peanut butter in the night',
            'have a banana oatmeal and have an ounce of almonds in the morning '+   '<break time="1s"/>'  +'and i suggest you to take veggies and meat balls in the afternoon  '+   '<break time="1s"/>'  +'and grilled meat in the night',
            'have three boiled eggs and have a blueberry smoothie in te morning '+   '<break time="1s"/>'  +'and have grilled veggies in the afternoon'+   '<break time="1s"/>'  +' and have a cup of brown rice in the night',
            'have a protein shake and have peanut butter along with the bananas in the morning '+   '<break time="1s"/>'  +'and have some panner and tofu in the afternoon and '+   '<break time="1s"/>'  +'grilled meat in the night '+   '<break time="1s"/>'  +'and have a protien shake '
            ];
            
            let i=  Math.floor(Math.random()*8);
             
          
        const speakOutput = `here is your meal `+`  '<break time="1s"/>' ` +` ${diet[i]}`;
       
       
          const repromptOutput =   '<break time="1s"/>'  +' Great !! You completed all the workouts !! . ' + '<audio src="' + clip10 +'"/>'  ;
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const GetMyScoreIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetMyScoreIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Great !! You got'
        const repromptOutput = ` ${score}`+` points`
        return handlerInput.responseBuilder
            .speak(speakOutput + repromptOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
       const speakOutput = 'You can ask me for Meditation,'+   '<break time="1s"/>'  +'Surya Namaskar,'+   '<break time="1s"/>' +'Warmup ,'+'<break time="1s"/>'+'Abs ,Cardio , Muscle ,Strength workouts , ' +'<break time="1s"/>' +' and Diet'+ '<break time="1s"/>' +' you will be awarded points at each segment!!  . You can also ask me for your score and leaderboards .'+ '<break time="1s"/>'+  ' what do you want to choose ?  '+ '<break time="1s"/>' ;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Thank you sooo much . Hope you will come next time';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};
const ShowLeaderBoardIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
        && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ShowLeaderBoardIntent';
   },
       handle(handlerInput) {
                 let clip11 = 'https://randomise1234.s3.ap-south-1.amazonaws.com/drum+roll.mp3';
  //         const player = await this.getPersistentAttributesManager;
// const leaderboardDirective = await GameOn.getLeaderboard(player);
  // const playerScore = await GameOn.getPlayerScore(player);
  const game = ['Your current rank is one .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is two .'+ '<audio src="' + clip11 +'"/>'  , 
'Your current rank is three .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is four .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is five .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is six.'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is seven .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is eight .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is nine .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is ten .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is eleven .'+ '<audio src="' + clip11 +'"/>' ,
'Your current rank is twelve .'+ '<audio src="' + clip11 +'"/>' 
  ]
    let temp = Math.floor(Math.random()*12+1);
    const speakOutput = `${game[temp]}`

    //const repromptOutput = `${playerScore.rank}`
    
     return handlerInput.responseBuilder
     .speak(speakOutput )
     // .addDirective(leaderboardDirective)
      .getResponse();
      }
};
// The intent reflector is used for interaction model testing and debugging.
 //t will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};




// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
      
        MeditationIntentHandler,
        WarmupIntentHandler,
        SuryaNamaskarIntentHandler,
        AbsWorkoutIntentHandler,
        CardioWorkoutIntentHandler,
        MuscleWorkoutIntentHandler,
        StrengthWorkoutIntentHandler,
        DietIntentHandler,
        GetMyScoreIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        ShowLeaderBoardIntentHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
