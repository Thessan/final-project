import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'
import { Accordion } from './Accordion'
import '../Styling/accordion.css'
import week1 from '../Styling/week1.jpg'
import week2 from '../Styling/week2.jpg'
import week3 from '../Styling/week3.jpg'
import week4 from '../Styling/week4.jpg'
import week5 from '../Styling/week5.jpg'
import week6 from '../Styling/week6.jpg'
import week7 from '../Styling/week7.jpg'
import week8 from '../Styling/week8.jpg'
import week9 from '../Styling/week9.jpg'
import week10 from '../Styling/week10.jpg'
import week11 from '../Styling/week11.jpg'
import week12 from '../Styling/week12.jpg'
import week13 from '../Styling/week13.jpg'


export function FirstAccordion() {
    
    return (
        <>
        <Sidebar />
        <Navbar />
        <h1 className="h1-accordion">Pregnancy Week By Week</h1>
        <section className="accordion-background">
        <div className="accordion-wrapper">
        <div className="accordion-container-one">
            <Accordion
            title="Week 1">
            <h2>From 0 full weeks + 0 days to 0 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            It can be difficult to know exactly when a pregnancy has begun. It is not always possible to say exactly when the conception took place, so the beginning of the pregnancy is counted from the first day of the last menstrual period. So should we be picky, it has not started any pregnancy yet. There is still nothing lying and growing inside the womb. In IVF, on the other hand, the first week of pregnancy is calculated differently, from two weeks before the egg is inserted into the uterus. The reason is that the egg, which has ingested sperm outside the body, has been allowed to live in a heating cabinet for 2-5 days before being put back into the uterus.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Most people develop a fertile egg every month. The egg matures in one of the ovarian follicles and when it ruptures, the egg is thrown out and caught by the fallopian tube funnel - this is called ovulation. A sign to look out for, if you want to keep track of ovulation, is that the discharge becomes more abundant and has an almost stringy consistency. This is to give any sperm a smooth sailing on the way to the egg. The egg continues to the fallopian tube where it lays ready for waiting to be fertilized. In the nutrient-rich environment, it can live for about a day. If there is no fertilization, the egg continues down into the uterus to disappear out through the cervix and vagina along with the uterine lining as your period.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            If you are planning to have children, it is good if your partner already starts eating folic acid. Folic acid reduces the risk of spina bifida in the fetus. If you or your partner smokes, you have never had a better reason to quit. Smoking - even passive - can have a negative effect on both fertility and pregnancy.
            </p>
            <br></br>
            <img src={week1} alt="illustration week 1"/>
            </Accordion>


            <Accordion
            title="Week 2">
            <h2>From 1 full week + 0 days to 1 full week + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            Still, no pregnancy has really started. Yes, it may sound dizzy, but it is because a pregnancy is counted from the first day of the last menstrual period, ie the last menstrual period that came before conception. To spin it further, there are other ways to count if you have done IVF, then the pregnancy begins to be counted two weeks before the egg was inserted. But put up with the confusing weeks, because later in the pregnancy the midwife will check the estimated date of birth with the help of ultrasound and you will get a little more accurate control. Then it is so that also this date is on an approximate, for only 5% give birth on their actual date. It is simply the baby in the womb, along with hormones, previous pregnancies and heredity, that decides when it's time to come out. However, you do not have to wait any longer - most people have given birth before week 42.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>     
            <p>
            Over the next two days, you may have children. Sperm are stubborn scoundrels and take anywhere from a few minutes to a few days to reach the egg. At first, it may be a whole bunch of sperm struggling side by side to get there - but it is not necessarily the fastest sperm that fertilizes the egg, but probably the one that matches the egg best. Do you notice anything? Some say they knew they were pregnant the moment the sperm reached the egg. But if you do not have a clue until the pregnancy test shows positive, then you are in good company. Most people do not notice anything and it usually takes at least three to five days before any sign of pregnancy is noticed. Things to look out for are, for example, metallic taste in the mouth, increased thirst, nausea, fatigue or changes in the breasts. If you have had IVF, you have a small head start and know the exact day of conception. The pregnancy test is performed two weeks after the egg has been inserted.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">ARTNER</p>
            <p>
            During the first, second and third week, you probably do not know that you are expecting a child. Some say that they knew they were pregnant the moment the egg was fertilized, but it usually takes at least three to five days after the actual fertilization before you can feel any sign of pregnancy. If your partner has started talking about, for example, metallic taste in his mouth or wants to vomit from just the sight of his favorite dish, it may be a fertilized egg that is the cause - these are two common signs of pregnancy. If you become pregnant through IVF, the egg has now been inserted. How a child is born does not matter, it is the birth that is important. The only difference is that you who have done IVF get to know much earlier that you are expecting a child than those who have become pregnant naturally.
            </p>
            <br></br>
            <img src={week2} alt="illustration week 2"/>
            </Accordion>
        
            <Accordion
            title="Week 3">
            <h2>From 2 full weeks + 0 days to 2 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>        
            Now it has begun, for real! A sperm cell has reached the egg and penetrated. The fertilized egg travels towards the uterus, on the way there it begins its development by the cells in the egg dividing over and over again. On the fourth day of pregnancy, the fertilized egg resembles a blackberry and is called "morula". It is as large as a pinhead and consists of 32 cells that have formed.    
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Now chemical signals are sent to the pituitary gland which tells you that you are pregnant and that it can stop ovulating for the time being - no more menstruation for a while! If you still have a small bleeding, it is not menstruation, but a so-called spotting. It comes from the fact that the egg gets stuck in the uterus, and is a bit like a blood-mixed discharge. Now the beginning of your placenta has also formed, a completely new organ has formed and the roots are digging deeper and deeper into the uterus. From here, the hormone progesterone begins to be produced, whose task is to maintain the pregnancy in the uterus, and the concentration rises rapidly in the blood. Another thing that rises a bit is actually the body temperature which gets a little higher.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            If your partner becomes pregnant, menstruation will stop coming from now on. However, another hemorrhage may appear. When the egg gets stuck in the uterus, it is quite common with so-called spotting which is completely harmless. It can occur seven to 14 days after ovulation, and can look like a blood-mixed discharge approximately. Soon you can do a pregnancy test to see if you are expecting a baby. In the case of artificial insemination such as IVF, one can think that for the first two weeks the egg has lived outside the uterus, which means that the egg has now been in the stomach for a week. It can be good to know that the body temperature of someone who is pregnant can sometimes rise slightly and many get tired. Feeling a little hung up and thinking you are about to get sick is quite common, so if you are trying to have children, this may be a small sign.
            </p>
            <br></br>
            <img src={week3} alt="illustration week 3"/>
            </Accordion>

            <Accordion
            title="Week 4">
            <h2>From 3 full weeks + 0 days to 3 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            It's tiny, only 0.5 mm so far, but it's there! The egg is attached to the lining of the uterus and is nourished by the blood vessel-rich environment. Around that, the development of the placenta continues, which will serve the baby everything it needs through pregnancy. It is now that the various fetal systems are formed, shaped and placed in the right place. The very first nerve cells and the spine begin to build. Some of the cells form predispositions to the gastrointestinal tract and lungs, others to the skin, muscles and blood vessels.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Does everything in the fridge smell bad? Can you sniff out perfume a mile away or do you just want to vomit by getting up in the morning? These are some of the many early signs that you may be pregnant. If you do not recognize yourself at all, it does not have to mean that you are not pregnant - some do not notice anything unusual at all in the beginning. Somewhere around week 4-6, the body begins to produce a pregnancy hormone called hCG. It is excreted in the urine and if you have become pregnant naturally, it is therefore possible to take a pregnancy test soon and see if you are pregnant. If you have had IVF, you know that you can have a test two weeks after the egg has been inserted. If the test shows negative but you still feel that something is going on in the body, you can wait a few days and then test again. Sometimes it can be the case that you test too early - the pregnancy hormone has not had time to come up in any measurable amounts. If a streak of blood appears when you dry yourself or in the panties, you do not have to worry, some get a little bleeding when the egg attaches to the uterine lining. It is completely harmless and nothing to worry about.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Around week 4-6, your partner begins to produce pregnancy hormone. hCG, as it is called, is excreted in the urine and is what makes it possible to see if you are expecting a baby through a regular pregnancy test. A little tip from us is to look at the results of the test together - this way you can share all the emotions that come up regardless of what the test shows. If you become pregnant through IVF, a pregnancy test may have already been done. The weeks of pregnancy are counted a little differently and a test can be done already two weeks after the egg has been inserted. It may be that your partner already feels tired or nauseous, it is completely normal and good for those who do not carry the child to know. Support where you can and suggest that many and small meals often help with nausea. Since food is something that can trigger it a little extra, it can be good if you put on the chef's hat right now.
            </p>
            <br></br>
            <img src={week4} alt="illustration week 4"/>
            </Accordion>

            <Accordion
            title="Week 5">
            <h2>From 4 full weeks + 0 days to 4 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            The embryo to be developed into a fetus is now about four millimeters long. The armpits protrude from the body like tiny, tiny buds. The brain system has divided into two halves and you can see the spine being formed. Between the vertebrae in the spine, nerve bundles look out from the spinal cord, they will find their way out into the whole body. Soon, the baby's continued development will also show. Depending on whether it is an x- or y-chromosome that has hit the egg first, either testosterone or estrogen will be released and form the baby's genitals.         
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            If you have not already done a pregnancy test, you probably now suspect that you are pregnant, if only because the period has not come when you thought. If you do a pregnancy test now, it will in all probability show positive. Do your breasts feel different? It is not uncommon for them to get bigger and tense a little or for you to start urinating a little more often than usual. The extra toilet visits are due to more blood flowing through the area around the uterus, but also to the fact that it grows and can press a little against the bladder. Usually you also feel a little extra tired, hungry or nauseous, which is not strange, the body works and puts a lot of energy into creating a small life. If the nausea feels awkward, it can actually help to eat - but a little and often. If you are not already taking folic acid supplements, it is a good idea to start with it now and make sure to eat until week 12. Now it may be a good idea to call the maternity ward to book an enrollment call. The midwife will answer your questions and if you want help with a pregnancy test, you can do it there. If you have become pregnant through artificial insemination, you will have to see a doctor at the IVF clinic to do an ultrasound. You still need to call the midwife and make an appointment for an enrollment call, as your pregnancy will be followed up at the maternity ward.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Now maybe you know that we are expecting a child - and if you have done IVF, you have probably been in control for a while. Finding out that you are going to become a parent is for most people a completely transformative feeling that is difficult to grasp. Especially for those who do not feel the physical changes - and can barely see them, more that your partner falls asleep from the movie you are trying to watch together… If you read on and gain insight and understanding of what happens during pregnancy, it can be easier to feel more involved and above all to support their partner for the, a little more struggling, months to come. A tangible example is that some changes may be needed; there are foods to avoid when you are pregnant, alcohol and nicotine are extra harmful while the fetus is developing, etc. Passive smoking is dangerous both now and once the baby is born. Now you can call the maternity ward where you live at any time to book an enrollment call. In the case of artificial insemination, the first meeting takes place at the IVF clinic where a doctor performs an ultrasound. Even if you have done IVF, you need to make an appointment for enrollment, as maternity care is completely separate from the IVF clinic. What the meetings look like during the Corona pandemic is a little different, it may be that you want to minimize the risk of infection and that you as a partner may not be able to participate as much as you want. But ask for what it looks like with you, and if there are digital opportunities to participate.
            </p>
            <br></br>
            <img src={week5} alt="illustration week 5"/>
            </Accordion>

            <Accordion
            title="Week 6">
            <h2>From 5 full weeks + 0 days to 5 full weeks + 6 days </h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            During this week, the baby triples its size and the little heart beats its first beat. The development is intense to say the least. The internal organs - stomach, intestines, liver and kidneys are formed - but also the attachments to the lungs come into place. The head is more clearly visible and the brain grows rapidly to fill the growing head. Every minute, a breathtaking 100,000 nerve cells are formed in the child! In week six, you can also distinguish eyes, mouth and nose, and the ear systems begin to be visible. So do the arms and legs - which protrude a short distance from the body like small wings.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Do you feel unwell in the mornings? Does the coffee taste disgusting? Does it feel like someone has clubbed you to bed in the evenings? There are wonderful things about being pregnant (we promise!) But just like this in the beginning, there are some less cozy pregnancy problems to be dragged along. Heartburn may feel familiar, or sore and tense breasts? Sluggish and gassy stomach because the hormones think the intestines can take it a little calmer to let the food pass is common, or to feel constantly hungry. There are a lot of things that the body starts with and even though it is terribly hard sometimes, it is important to remember that it is temporary! Everything will pass. It passes at different speeds, but for most people, the monumental fatigue and constant nausea is the worst in the beginning. During weeks 6-8, most maternity care centers or midwife clinics usually want you to come for an enrollment call. It's a call you book yourself when you land in that you are pregnant. During the enrollment interview, you talk about pregnancy, expectations and if you feel any anxiety. The midwife will be there for you throughout the pregnancy, both to keep track of the pregnancy but also to make you as a parent feel safe. If you notice that you are not happy with the midwife, it is possible to change to another person or reception. If you have a partner, it is good if you can both join. On the one hand, it's nice to be able to share as much of the pregnancy as possible, but there is also a lot that is said in the conversation - and four ears hear better than two.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Yet maybe only you and your partner know that you are expecting a child - and maybe you want to keep it that way for a while longer? Or do you want to tell everyone? Now! Everyone chooses to do differently and there is no right or wrong in how to do it. Some people want to wait until they land and feel reasonably safe with the pregnancy. While others want to say as early as possible so that everyone around you should know what you are going through and be a support. There is no requirement to tell or not - but it can be good to have a united front. So talk through how you want to do! Heads up because the nausea can be very annoying right now. For many, it is like a constant seasickness. Try to listen to how your partner is feeling, keep in mind that you are two about having children - and that you who do not wear it can put a little extra care on your partner and help where possible, for example by shopping for food and drink that can relieve nausea.
            </p>
            <br></br>
            <img src={week6} alt="illustration week 6"/>
            </Accordion>

            <Accordion
            title="Week 7">
            <h2>From 6 full weeks + 0 days to 6 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">OUR CHILD</p>
            <p>
            The heart, which is one of the first organs to develop, now pumps around blood into the tissues of the small body. The head can now also be distinguished and the structures on the child's face begin to become clear. Now you also see that the eyes develop, like a small pit on each side of the head - but the eyelids are still missing. Cartilage is also formed now, cartilage that will become a skeleton and continue to develop and grow until the child is about 20 years old. The hands begin to be visible and look like tiny, tiny paddles. Because the baby is almost transparent, you can see the heart, spine and tail. The tail ??! Yes you heard right, this early the embryo has something that looks like a small tail, but do not worry, it will regenerate and disappear around week nine and only the tailbone remains. The subcutaneous tissue has not yet formed but the connective tissue that is the beginning of the skin is on its way. In what is to become the brain, it happens full of stuff already now with different parts that are starting to have their own specific functions, and connections between the nerve cells that are constantly evolving. At the end of this week, your future baby is as big as a pea.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            There is probably no one yet who can see that you are expecting a child, but there is a good chance that you are feeling changes in your body. Quite a few, 7 out of 10, feel bad like this in the beginning of their pregnancy. The main reason for this, to say the least troublesome, condition is the major hormonal changes the body is dealing with. But persevere, it usually calms down in a few weeks. If you have exercised before pregnancy, it is smart to continue with the same exercise as long as it feels good - exercise is good and can relieve some of the early pregnancy problems, especially fresh air is often great for nausea. For those of you who have not exercised before pregnancy, it is still good to start with a simpler form of exercise. It is especially important to get started with daily squeezing exercises right now, because it is a must to have a strong pelvic floor that can help carry the stomach that comes. Making them is easy, but harder to remember. A tip is to create a simple memory rule that gives you a daily reminder: every morning you brush your teeth or in the evening when you go to bed. If you have become pregnant with the help of in vitro fertilization, you will now have to do a vaginal ultrasound at the fertility clinic to see that everything develops as it should.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Does your partner feel bad? It is not uncommon, as many as 7 out of 10 feel unwell at the beginning of their pregnancy. The main reason for the nausea is actually that the body makes massive changes when it comes to the hormones. Of course, it is also the hormones that make many extra sensitive to scents during pregnancy. It may be scents she has loved before that suddenly feel like rotten fish when they reach the nose and unfortunately it is not entirely uncommon for it to be your scents that she reacts to. Maybe you can put your favorite perfume on the shelf for a while to avoid a bad mood. Sometime during week 6-8, it is time for most people to have an enrollment call at the maternity care center (MVC) or midwife clinic. All expectant parents, not just the one carrying the child, may be involved in conversations with the midwife. During pandemic times, the enrollment calls can look a little different than usual, maybe they take place via video or telephone, listen to what applies to you. Being a partner will make the pregnancy feel more like a shared experience. A tip is to write down everything you are wondering so it will be easier to remember once you are with the midwife. And while it may feel like a pregnancy is the most natural thing there is, it's not certain that every thing is completely self-evident - simply remember that there are no stupid questions and that it's better to ask once for much more than once too little. If you have become pregnant with the help of in vitro fertilization, you will have to do an early ultrasound at the fertility clinic to see that everything develops as it should. Then together you will be able to see the baby's heart beat.
            </p>
            <br></br>
            <img src={week7} alt="illustration week 7"/>
            </Accordion>
        </div>

        <div className="accordion-container-two">
            <Accordion
            title="Week 8">
            <h2>From 7 full weeks + 0 days to 7 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">OUR CHILD</p>
            <p>
            The child is now about 1.5 cm tall and increasingly resembles a small human in miniature. Although, as you can see, this tiny human has very strange proportions: the head is still large in relation to the upper body and much larger than the lower body. But the body straightens more and more and the beginning of what will be arms, legs and feet is now clearly visible. There is full activity in the womb, the baby moves all the time and rests only for short moments at a time. The impulses of movement from the brain now reach all the way into the arms and legs and signals are sent via the nervous system out to the muscles which give them instructions on how to behave. At the same time, information is also sent back to the brain from the outer parts of the body. The fact that the child can now move is important for further development of muscles and joints. You can not yet feel the movements, but they are there. This week, the sense organs, and the most important internal organs - all to the regular beat of the heart - are also laid out. Now we can also celebrate that the placenta is self-sufficient in hormones.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Maybe you have noticed that you react more strongly than you usually do to scents, that all of a sudden you can't stand your favorite smell? Thank the hormones… Unfortunately, you just have to like the situation and try to avoid what gives you discomfort, and keep in mind that it mostly passes. You may feel small stings and a sensation of something resembling mild menstrual cramps? It is the growing uterus that is now as big as an orange and stretches the ligaments. Even if it is still not visible on the outside that a small life is growing in you, it is constantly getting bigger and taking up more and more space. If you get a little bleeding during the first third of pregnancy, it may be nice to know that it is quite common and absolutely does not have to mean that you are about to have a miscarriage. If, on the other hand, you feel increasing pain in connection with the bleeding and that it persists, or increases, you should, however, contact the health service. Do you go and secretly rejoice over your pregnancy? Many people feel that it is a little too early to tell relatives and friends that they are expecting a child. But that does not mean that you do not bubble with questions or thoughts - so talking about yourself in our parent talk with others in the same situation can be nice.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            During pregnancy, it is completely normal for your partner to fluctuate in the mood, the reason is of course the hormonal change that takes place in the body. Then it is not entirely easy to always have the mood on top if you at the same time feel tired and unwell. You may have gone through a pregnancy yourself and remember how you could feel, both peaks but also valleys? If this is your first child, you simply have to try to understand that right now it is often a difficult period you have to go through. Talk about how you can best be there and help. A common feeling during pregnancy is anxiety. Not only over the child, but also that something should happen to you as a partner. It may seem illogical, but it is part of the whole preparation for becoming a parent. To try to deal with the anxiety, talk to each other about it. Maybe there are things you can wait with if they create unnecessary anxiety?
            </p>
            <br></br>
            <img src={week8} alt="illustration week 8"/>

            </Accordion>

            <Accordion
            title="Week 9">
            <h2>From 8 full weeks + 0 days to 8 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            The child has now become about 2-3 cm tall and the shape looks more and more like a human and less and less like a pink lump. On the nose you can see two tiny holes, which are about to develop into nostrils. The head is almost half the size of the body and the child straightens more and more. We also wave goodbye to the tail, which now becomes the tailbone instead. The nervous system, and in particular the brain cells, develop and mature. Most nerve cells are formed at the site where the brain develops, about 100,000 per minute. The child's internal genitals are clear and still look the same for both sexes. Arms and hands are sprinting a bit right now and growing faster than legs and feet. The child now touches the elbows and joints, as the muscles have begun to form.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Now your blood volume increases. You may feel that you bleed a little more from the gums when you brush your teeth and can get nosebleeds more easily? This is because the blood flow increases in all mucous membranes. Maybe you have less desire for sex? Or more? It is very common for the desire to have sex to change when you are expecting a child - both for the person carrying the child but also for a potential partner. It is important to know that sex does not harm pregnancy, but as always, you should follow your desire. That you commute more in the mood than otherwise is also super common. Cute animals can make you cry rivers, a look at your partner and you can be furious for no reason - or maybe get a huge longing to just be left alone. This is because the body spins around on so many strong emotions and a jumble of thoughts that replace each other and need to be processed. Then it does not get better because you may feel bad and are constantly dead tired. Lovely? Hardly, but persevere! For the vast majority, it usually releases in a few weeks. You have probably already been to the midwife on the first visit with an enrollment call - if not, it's time to get in touch and book it. If fetal diagnostics are relevant, you can often do NIPT (non-invasive prenatal testing) as early as week 10 in the regions that offer it. Like KUB, it is a test to see any chromosomal abnormalities, but the difference is that you get clearer and more reliable answers. NIPT is done via blood tests and is completely risk-free. But as with all fetal diagnostics, you should think about the purpose before you do the test and how you approach the result if it does not turn out what you hoped for.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            There is often a general understanding that the person who carries the baby loses the desire for sex during pregnancy, but the fact is that it is quite common that the partner's desire for sex can also decrease. Or increase, which can also happen to the pregnant woman. It is simply impossible to say how it will be for you, and whatever it is, it will most likely vary considerably during the different phases of pregnancy. The solution to this is of course communication. Talk to each other regularly and honestly about how you feel and what you feel like. Proximity is just as important as ever, but it can be created on many different levels if the desire disappears. No matter how you do it, it can be nice to know that sex during pregnancy is not something that harms the baby.
            </p>
            <br></br>
            <img src={week9} alt="illustration week 9"/>
            </Accordion>

            <Accordion
            title="Week 10">
            <h2>From 9 full weeks + 0 days to 9 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            All organs are now in place, but are far from ready. They will mature for about 30 weeks in the future as the baby grows. The heart, which has been beating fast since week six, is fully developed - but very small. Many of the functions of the brain and nervous system are also already clear, and the thyroid gland has begun to release the hormone thyroxine, which manages the cells' energy metabolism. The baby is about 3 cm and floats around in a liquid-filled membrane sac. On the fingers and toes you can see the hint of joints and nails. The taste buds develop and the eyes pull forward to find their place. The child can perceive light, but not blink yet. Now the inner ear is also formed, but it takes time for the child to hear.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            You live with your pregnancy day and night. Maybe you sleep worse than usual and need to urinate once or several times a night. It is not uncommon to feel bloated and probably the pants do not fit properly as they usually do. If you have still not been told that you are expecting a child, it can start to be a challenge to hide the body's change. Explaining a mood that goes in all directions can also be a bit bumpy. It is not always what you think that reveals you. Maybe it's more that you quit coffee rather than snacking or extra sandwiches at work that makes people start thinking. Or the slightly large shawls that hang loosely for the stomach to confuse the gaze, the big shirt or the slightly absent gaze. You may know for yourself that it is not really possible to put your finger on what it is that makes one wonder if a person is expecting a child. But even if the mother-in-law continues to offer green mold cheeses, the most important thing is that you decide for yourself when you want to tell why you do not want (or can) eat the whole cheese plate.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            You will meet the midwife a number of times during pregnancy - a lot of focus will be on the one carrying the baby with examinations in the form of urine samples, blood pressure and various blood tests. But it is also important for the midwife to talk to both of you about both expectations and any concerns, but also to answer your questions. So your thoughts are important and it is good to go there together even if the samples are not taken on you. Getting an idea of ​​what is happening is also a way for you to be involved and be able to support your partner. Then sometimes there are no conditions for you to be able to be there physically, then you can investigate the possibility of participating digitally. The reason for taking blood samples is partly to check blood type and measure iron levels. If it turns out that the blood value is too low, you need to think about extra iron-rich diet or iron supplements in tablet form. Blood pressure is another thing you check and follow during pregnancy, it often drops in the beginning and then rises during the last three months. Urine samples are taken to check that there is no protein, or egg white substance as it is also called, in the urine as it may be a sign of a urinary tract infection or that the function of the kidneys is impaired.
            </p>
            <br></br>
            <img src={week10} alt="illustration week 10"/>
            </Accordion>


            <Accordion
            title="Week 11">
            <h2>From 10 full weeks + 0 days to 10 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            The child is now around 4.5 cm long and the heart beats at a full 140-150 beats / minute, just as it should. That pace is needed to be able to give the small body everything it needs to be able to grow and develop. Right now, the head is as big as the rest of the body, but it will settle down in the future. The liver, in turn, is also large, so that it fills almost the entire abdominal cavity. It now has an important job of taking care of and taking out waste products. Testicles or ovaries are in place and now one can also sense the external genitalia. The child can open his mouth and the tongue is already fully developed.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            If you have felt unwell, it may be that it is starting to slow down now. Finally! If the nausea continues, it is just a matter of trying to persevere, it is unfortunately not impossible that it hangs on further into the pregnancy. However, the mood can go roller coaster, there are many who are more sensitive than usual. The hormones are of course a reason, but also that a lot of energy is spent thinking about the future. It is a life-changing time that awaits and maybe you are afraid of losing what you have? Maybe you are worried about how it will be? If you have a partner, talk about the feelings, if you have no one, talk to another relative. Regardless of what the future family will look like, it is perfectly normal at this stage of the pregnancy to think about whether you have made the right choice, if you will fix it. Try to find the security that you will soon land, and all of a sudden see things from the positive side again! One way to deal with difficult thoughts or worries is to move. Even if you do not exercise regularly, try walking or swimming. Exercising a little every day makes you feel better and can also prevent certain pregnancy problems. Then, of course, it is very important not to push your body, which is doing a fairly large job right now. Listen to what it can handle, if it wants to fall asleep on the sofa at the age of seven several nights in a row, it probably needs it right now. Now you also need to drink extra, lots of water is needed in the body for the production of both blood and amniotic fluid. The body also begins to burn more calories and therefore needs a little extra nutrition. An extra fruit, a sandwich and a glass of milk, or vegan variant, if the day is enough.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Your partner's mood swings may feel like everyday now, you have to endure a while longer - but in a couple of weeks they usually calm down. They are due both to hormones that roll around the body, but also to thoughts about the future and childbirth that take a lot of energy and make the mood bounce. Maybe you also waver a little in the mood and think about what the future will look like? The best advice is to talk to each other. Share thoughts, worries, reflections but also joy, pepper and tingle. You can also talk to the midwife about your feelings and get advice and tips on how to deal with them. Dreams are common when you are expecting a child, both for those who carry the child and for those who do not. Often they are surreal like that the child is born in the food queue, that it comes out as half a bicycle, half a child or that you leave it alone in the most unreasonable place you can imagine. It is simply the brain's way of processing the big thing that is at the door: becoming a parent.
            </p>
            <br></br>
            <img src={week11} alt="illustration week 11"/>
            </Accordion>

            <Accordion
            title="Week 12">
            <h2>From 11 full weeks + 0 days to 11 full weeks + 6 days </h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            The baby has grown and is about 5.5 cm long - it weighs in at 15 small grams. Now it gets both nutrition and oxygen through the placenta. The whole fetus is constantly developing, but right now it is working full time with important development of the brain. The eyelids are in place, the teeth are on their way and the upper lip gets its cupid's arch. The baby can now swallow and the intestines slowly begin to move in the stomach as there is more and more room for them.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Are the clothes starting to fit tight? Try a rubber band at the button and you get a little extra space in the waistband and can use your favorite jeans for a while - there are also ready-made extensions to buy. Otherwise, you can run bras that sit further down the hip. Or you can jump straight into a pair of maternity leggings - the main thing is that you feel comfortable! With each breath, you draw in 40 to 50 percent more air than usual and the chest has expanded, which explains why you may feel that the regular bra no longer really fits. Another thing that of course affects the fit is that the breasts have most likely already changed. They have probably grown and maybe the nipples and the area around them have become a little darker - you do not really know, but you think it has to do with the baby finding it easier when it comes out. It is not uncommon for them to be a little sore and for the nipples to be more sensitive. If you have decided to do a KUB test (combined ultrasound and blood test), the ultrasound should be done sometime between weeks 11 and 14 - so then it may be good to book an appointment now. A CUB shows how likely it is that the fetus has a chromosomal abnormality. It may be worth thinking about the purpose before taking the test and how you approach a result that may not be where you hoped it would be. It differs between the regions if you can make a CUB, so talk it through with your midwife.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            Maybe you find it a little difficult for your partner to keep his attention for a long time or forget things more often than before? It is very common and will probably become more as time goes on. You do not really know what it is due to, maybe it is the lack of sleep along with hormonal changes. Or it is so simple that the body is busy building up a small life there in the stomach and does not have time to focus on everything else that is happening. When the child has grown up and takes up more space in the body, kicks, somersaults and twists will be a reason why it is a bit difficult for the host acrobat to keep the thread and focus on other things. But there is actually a sunny side to this as well - many pregnant women get, from the second trimester that you will soon enter, an increased calm and often feel that there is no reason to stress unnecessarily.
            </p>
            <br></br>
            <img src={week12} alt="illustration week 12"/>
            </Accordion>

            <Accordion
            title="Week 13">
            <h2>From 12 full weeks + 0 days to 12 full weeks + 6 days</h2>
            <br></br>

            <p className="small-header">YOUR CHILD</p>
            <p>
            All organs are now laid out and have begun to function little by little. The first part of the pregnancy is completed and the remaining two thirds are for the baby to grow and the organs to fully mature - so that the baby is as prepared as it can be for a life outside the womb. The small body is becoming more and more stable - just over 6 cm long and weighing around 60g. But as I said, there is still a lot that needs to be sharpened: the ears are far down, the eyes - which are still closed - are wide apart. Parts of the cartilage that served as a bone structure begin to harden and become skeletons and the child moves more and more with each passing day. The baby has been given a little extra water around him, which makes it easier to stretch the body. An ultrasound examination shows how the hands move towards the mouth and how the arms and legs are bent and stretched. Little boys produce male sex hormone and in girls there are millions of primitive ovaries in the immature ovaries. Now you can also guess the lines on the fingertips that later become the child's unique fingerprints.
            </p>
            <br></br>
            <br></br>

            <p className="small-header">MOTHER</p>
            <p>
            Now you are soon entering the second third, or trimester, of pregnancy (it depends a bit on how you count, but v.13 or 14 is usually stated as the starting shot for the second trimester). Many people experience that they enter a calmer period, the nausea and fatigue have hopefully decreased - although for some it may last longer. There is also often a calm when you enter this week, as the greatest risk of miscarriage is over. You may be able to let go of a small but gnawing anxiety and dare to think ahead for real. Week 13 is often when you start to dare to tell the environment that you are expecting a child. It can feel both scary and exciting, but often it's nice to not have to keep it a secret. It will also be difficult to hide it much longer - the stomach will appear as a small ball whether you say something or not. Do not be surprised if many have already guessed that you are expecting a baby. The sneaky eating of sweets, constant visits to the toilet or subtly patting on the small stomach has probably been rumored that it is a bun in the oven. Many people are feeling better now, but the need for rest and good food is something that will be present throughout the pregnancy - so finding a good balance is important for you to continue to feel good. Regular work and physical activity are not bad at all, but try to avoid exposing yourself to stress and sleep properly.
            </p>
            <br></br>
            <br></br>
            
            <p className="small-header">PARTNER</p>
            <p>
            You have now gone through the first third of your pregnancy and the greatest risk of miscarriage is over. For many expectant parents, this is a bit of a milestone, most become less anxious and begin to feel better. Maybe your partner has also started to get a little more alert. Unfortunately, this is not true for everyone, there are those who feel bad throughout the pregnancy, some so bad that they may need to seek care for it. You may have heard that pregnant women can crave a specific diet or thing, something called cravings. You actually do not really know what it is due to, but many can get unreasonably hungry for everything from chocolate, citrus fruits, salt to licorice (just licorice is something you should take it easy with when you are pregnant, there is no danger of eating a little - but too large quantities are not good). For some, cravings can go a little overboard and you get a huge craving for things that are absolutely not edible, such as cement, chalk or soil. This at the same time as other foods and scents, often old favorites, can create enormous discomfort and distaste.
            </p>
            <br></br>
            <img src={week13} alt="illustration week 13"/>
            </Accordion>
        </div>
        </div>
        </section>
        </>
    );
}

    const rootElement = document.getElementById("root");
    ReactDOM.render((
        <BrowserRouter>
            <FirstAccordion />
        </BrowserRouter>)
    , rootElement);
    