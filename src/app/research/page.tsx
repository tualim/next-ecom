// import { prisma } from "@/lib/db/prisma";

export default async function research({}: any) {
  return (
    <div className="flex flex-col items-center">
      <div>
        progress: 80% <br />
        detail: ทำเสร็จบทที่ 5 และกำลังเกลารายละเอียดของวิจัย <br />
        วิจัย:
        การวิจัยนี้ได้ทำการศึกษาเกี่ยวกับสถาปัตยกรรมของเว็บแอปพลิเคชันในรูปแบบ
        MVC และ Frontend/Backend หรือ frontend/backend <br />
        โดยใช้การพัฒนาในภาษา GO
        เพื่อเปรียบเทียบประสิทธิภาพการทำงานของเว็บแอปพลิเคชันบนสถาปัตยกรรมที่ต่างกัน
        โดยภาษา GO <br />
        เป็นภาษาที่กำลังได้รับความนิยมเนื่องจากเป็นภาษาที่เป็น compile static
        type
        ทำให้ประสิทธิภาพในการทำงานของแอปพลิเคชันนั้นสูงและด้วยเหตุผลข้างต้นชุมชนของนักพัฒนาที่ใช้ภาษา{" "}
        <br />
        GO จึงเพิ่มขึ้นอย่างรวดเร็วและมีขนาดใหญ่ GO
        เป็นภาษาที่พัฒนาจากกลุ่มเพื่อนร่วมงาน 3 คนที่ Google
        โดยพัฒนาออกมาเพื่อแก้ปัญหาความไม่ชอบร่วมกันของทั้ง 3 <br />
        คนจากภาษา C++ วัตถุประสงค์ในการวิจัยนี้ 1.
        เพื่อเปรียบเทียบประสิทธิภาพระหว่างสถาปัตยกรรมเว็บแอปพลิเคชั่นแบบ MVC และ
        Frontend/Backend frontend/backend <br />
        2.
        เพื่อเป็นปัจจัยประกอบการตัดสินใจในการเลือกพัฒนาเว็บแอปพลิเคชันในรูปแบบสถาปัตยกรรมที่เหมาะสม
        โดยการวิจัยนี้ได้ทำการทดสอบด้วยโปรแกรมวัดประสิทธิภาพ K6 <br />
        เพื่อทดสอบด้าน metric ในการรับส่งข้อมูล request/response และ Google
        chrome developer tool ในการวัดการแสดงผลบนหน้าจอของฝั่ง client <br />
        โดยแบ่งการทดสอบทั้งหมดออกเป็น 2 รูปแบบ ประกอบด้วยวิธี load test และ
        spike test
        โดยมีการขยายตัวของแอปพลิเคชันเพื่อวัดประสิทธิภาพด้านการขยายตัวด้วยและนำ
        <br />
        เวลาในการพัฒนามาประกอบด้วยส่วนหนึ่ง
        การทดสอบในแต่ละรูปแบบจะดำเนินการเป็นจำนวน 5 ครั้ง ซึ่งคือ instance แบบ
        t2.large แบบ load test 5 ครั้ง spike test 5 <br />
        ครั้ง instance แบบ t2.2xlarge แบบ loadtest 5 ครั้ง และ spike test 5
        ครั้ง โดย loadtest แบ่งจำนวนผู้ใช้สูงสุดเป็น 30 และ spike test <br />
        เป็น 40 ผลการวิจัยพบว่าสถาปัตยกรรมรูปแบบ Frontend/Backend
        สามารถรับจำนวนของคำขอต่อวินาทีได้มากที่สุดด้านการขยายตัวของแอปพลิเคชั่นการตอบสนองต่อการขยาย{" "}
        <br />
        MVC ทำได้ดีกว่าเล็กน้อยส่วน ด้านการแสดงผลทั้ง 2
        ในด้านของเวลาไม่มีความแตกต่างที่ชัดเจนในการแสดงผลครั้งแรกส่วนด้านการพัฒนานั้นเวลาในการพัฒนาเนื่องจาก{" "}
        <br />
        Frontend/Backend ต้องพัฒนาทั้งด้าน frontend และ backend
        เวลาและทรัพยากรจึงใช้เยอะกว่าการพัฒนา
        <br />
        <br />
        <br />
        <br />
        <a href="/" className="btn btn-square btn-primary w-full">HOME</a>
      </div>
    </div>
  );
}
