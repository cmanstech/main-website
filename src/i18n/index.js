import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact Us',
    },
    hero: {
      line1: 'Code.',
      line2: 'Craft.',
      line3: 'Continuity.',
      subtext: 'We turn complex infrastructure into effortless experiences.',
      scrollCta: 'SCROLL TO EXPLORE',
    },
    servicesLanding: {
      label: 'Services',
      tagline: 'We craft IT systems and plugins that flow effortlessly across platforms — enhancing every interaction and elevating how your business works.',
      items: [
        { title: 'Custom IT Solutions', desc: "Tailored systems designed around your organization. We understand that every organization has unique needs. That's why we build fully customized IT systems — from internal management tools and data analytics platforms to industry-specific solutions — all engineered to align perfectly with your workflow and objectives." },
        { title: 'Plugins & Integrations', desc: 'Seamless connections for better performance. Enhance your existing systems with custom-built plugins and integrations such as Payment Gateway, Booking, or E-Commerce solutions. We ensure new and legacy systems work together smoothly, reducing complexity and increasing overall efficiency.' },
        { title: 'Scalable & Secure', desc: 'Zero-downtime deployments, observability by default, least-privilege access, and encryption in transit/at rest.' },
        { title: 'User-Friendly Interfaces', desc: "Type-first UI, motion that serves meaning, and accessibility that's built-in — not bolted on." },
      ],
    },
    servicesServices: {
      label: 'Services',
      tagline: 'We craft IT systems and plugins that flow effortlessly across platforms — enhancing every interaction and elevating how your business works.',
      changconnectDesc: "Changconnect offers a freemium consulting model — giving you direct access to verified contractors and design professionals at zero upfront cost. Post your project requirements, receive initial proposals, and get expert advice before you commit to anything. Our free tier covers consultation, contractor discovery, and material estimation, while premium tiers unlock priority matching, dedicated project management, and full end-to-end execution support. It's the fastest way to turn a construction idea into a trusted, managed reality.",
      items: [
        { title: 'Custom IT Solutions', desc: "Tailored systems designed around your organization. We understand that every organization has unique needs. That's why we build fully customized IT systems — from internal management tools and data analytics platforms to industry-specific solutions — all engineered to align perfectly with your workflow and objectives." },
        { title: 'Plugins & Integrations', desc: 'Seamless connections for better performance. Enhance your existing systems with custom-built plugins and integrations such as Payment Gateway, Booking, or E-Commerce solutions. We ensure new and legacy systems work together smoothly, reducing complexity and increasing overall efficiency.' },
        { title: 'Scalable & Secure', desc: 'Engineered for growth and fortified for safety. We design architectures that scale without limits while ensuring encryption, reliability, and zero-downtime protection across every layer of your system.' },
        { title: 'User-Friendly Interfaces', desc: 'Interfaces designed for clarity and ease. We craft layouts that feel intuitive from the first interaction, reducing friction and making complex systems simple to use for everyone.' },
      ],
    },
    newProject: {
      category: 'Project',
      heading: 'CHANGCONNECT,\nBuilding solutions\nThrough expertise,\nengineering\nand trusted hands.',
      description: 'Introducing "Changconnect" — From design consultation to construction execution, we provide end-to-end services tailored to your needs with the right materials and expert craftsmanship.',
      cta: 'Visit',
    },
    process: {
      label1: 'Our',
      label2: 'Process',
      tagline: 'From architecture to interface, every detail is designed for clarity, efficiency, and a flawless user experience. Our process combines engineering precision with creative thinking — ensuring every product we build is not only functional, but also effortless to use and easy to scale.',
      discover: 'Discover',
      design: 'Design',
      develop: 'Develop',
      deploy: 'Deploy\n&\nSupport',
    },
    whyUs: {
      kicker: 'WHY US',
      title: 'Built with logic. Refined with design. Sustained by continuity.',
      desc: 'Zero-downtime infra, type-first UI, and craft that scales — so products feel effortless at any load.',
      cta: 'See work',
    },
    footer: {
      tagline: 'Blending design and engineering to craft digital experiences that last. We build technology that scales with you. Reliable, adaptable, and future-ready.',
      about: 'About us',
      projects: 'Projects',
      contact: 'CONTACT US',
      copyright: '© 2025 CMANS TECH CO., LTD.  All Rights Reserved.',
    },
    contact: {
      heading: 'Code meets clarity\nwhen the right people talk.',
      addressLabel: 'Address',
      contactLabel: 'Contact',
    },
  },

  th: {
    nav: {
      home: 'หน้าแรก',
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อเรา',
    },
    hero: {
      line1: 'เขียนโค้ด.',
      line2: 'สร้างสรรค์.',
      line3: 'ต่อเนื่อง.',
      subtext: 'เราเปลี่ยนโครงสร้างพื้นฐานที่ซับซ้อนให้กลายเป็นประสบการณ์ที่ไร้รอยต่อ',
      scrollCta: 'เลื่อนเพื่อสำรวจ',
    },
    servicesLanding: {
      label: 'บริการ',
      tagline: 'เราสร้างระบบ IT และปลั๊กอินที่ทำงานได้อย่างราบรื่นบนทุกแพลตฟอร์ม — เพิ่มประสิทธิภาพทุกการปฏิสัมพันธ์และยกระดับการดำเนินงานของธุรกิจคุณ',
      items: [
        { title: 'ระบบ IT แบบกำหนดเอง', desc: 'ระบบที่ออกแบบมาเพื่อองค์กรของคุณโดยเฉพาะ เราเข้าใจว่าองค์กรแต่ละแห่งมีความต้องการที่แตกต่างกัน เราจึงสร้างระบบ IT ที่กำหนดเองอย่างสมบูรณ์ — ตั้งแต่เครื่องมือบริหารจัดการภายใน แพลตฟอร์มวิเคราะห์ข้อมูล ไปจนถึงโซลูชันเฉพาะอุตสาหกรรม' },
        { title: 'ปลั๊กอินและการเชื่อมต่อ', desc: 'การเชื่อมต่อที่ราบรื่นเพื่อประสิทธิภาพที่ดีขึ้น เพิ่มขีดความสามารถของระบบที่มีอยู่ด้วยปลั๊กอินและการเชื่อมต่อที่สร้างขึ้นแบบกำหนดเอง เช่น Payment Gateway, การจอง หรือโซลูชัน E-Commerce' },
        { title: 'ขยายได้และปลอดภัย', desc: 'การปรับใช้แบบ Zero-downtime ระบบตรวจสอบตั้งแต่ต้น การควบคุมสิทธิ์แบบ Least-privilege และการเข้ารหัสทั้งขณะรับส่งและจัดเก็บข้อมูล' },
        { title: 'อินเทอร์เฟซที่ใช้งานง่าย', desc: 'UI ที่เน้นประสิทธิภาพ การเคลื่อนไหวที่มีความหมาย และการเข้าถึงที่ถูกสร้างมาตั้งแต่แรก — ไม่ใช่เพิ่มเติมในภายหลัง' },
      ],
    },
    servicesServices: {
      label: 'บริการ',
      tagline: 'เราสร้างระบบ IT และปลั๊กอินที่ทำงานได้อย่างราบรื่นบนทุกแพลตฟอร์ม — เพิ่มประสิทธิภาพทุกการปฏิสัมพันธ์และยกระดับการดำเนินงานของธุรกิจคุณ',
      changconnectDesc: 'Changconnect นำเสนอโมเดลการให้คำปรึกษาแบบ Freemium — เปิดโอกาสให้คุณเข้าถึงผู้รับเหมาและนักออกแบบมืออาชีพที่ผ่านการรับรองโดยไม่มีค่าใช้จ่ายล่วงหน้า โพสต์ความต้องการโปรเจกต์ รับข้อเสนอเบื้องต้น และรับคำแนะนำจากผู้เชี่ยวชาญก่อนตัดสินใจ แพลนฟรีครอบคลุมการให้คำปรึกษา การค้นหาผู้รับเหมา และการประมาณการวัสดุ ขณะที่แพลนพรีเมียมปลดล็อกการจับคู่แบบเร่งด่วน การจัดการโปรเจกต์แบบเฉพาะตัว และการสนับสนุนแบบครบวงจร',
      items: [
        { title: 'ระบบ IT แบบกำหนดเอง', desc: 'ระบบที่ออกแบบมาเพื่อองค์กรของคุณโดยเฉพาะ เราเข้าใจว่าองค์กรแต่ละแห่งมีความต้องการที่แตกต่างกัน เราจึงสร้างระบบ IT ที่กำหนดเองอย่างสมบูรณ์ — ตั้งแต่เครื่องมือบริหารจัดการภายใน แพลตฟอร์มวิเคราะห์ข้อมูล ไปจนถึงโซลูชันเฉพาะอุตสาหกรรม — ออกแบบให้สอดคล้องกับกระบวนการและเป้าหมายของคุณ' },
        { title: 'ปลั๊กอินและการเชื่อมต่อ', desc: 'การเชื่อมต่อที่ราบรื่นเพื่อประสิทธิภาพที่ดีขึ้น เพิ่มขีดความสามารถของระบบที่มีอยู่ด้วยปลั๊กอินและการเชื่อมต่อที่สร้างขึ้นแบบกำหนดเอง เช่น Payment Gateway, การจอง หรือโซลูชัน E-Commerce เราทำให้ระบบใหม่และระบบเดิมทำงานร่วมกันได้อย่างราบรื่น' },
        { title: 'ขยายได้และปลอดภัย', desc: 'ออกแบบมาเพื่อการเติบโตและเสริมความแข็งแกร่งด้านความปลอดภัย เราออกแบบสถาปัตยกรรมที่ขยายได้ไม่มีขีดจำกัด พร้อมรับประกันการเข้ารหัส ความน่าเชื่อถือ และการป้องกันแบบ Zero-downtime ในทุกชั้นของระบบ' },
        { title: 'อินเทอร์เฟซที่ใช้งานง่าย', desc: 'อินเทอร์เฟซที่ออกแบบเพื่อความชัดเจนและความสะดวก เราสร้างเลย์เอาต์ที่ใช้งานได้ง่ายตั้งแต่การโต้ตอบครั้งแรก ลดความยุ่งยากและทำให้ระบบที่ซับซ้อนใช้งานได้ง่ายสำหรับทุกคน' },
      ],
    },
    newProject: {
      category: 'โปรเจกต์',
      heading: 'CHANGCONNECT,\nสร้างโซลูชัน\nด้วยความเชี่ยวชาญ,\nวิศวกรรม\nและมืออาชีพที่ไว้วางใจได้.',
      description: 'แนะนำ "Changconnect" — ตั้งแต่การให้คำปรึกษาด้านการออกแบบจนถึงการดำเนินการก่อสร้าง เราให้บริการแบบครบวงจรที่ปรับให้เหมาะกับความต้องการของคุณ ด้วยวัสดุที่เหมาะสมและความชำนาญของมืออาชีพ',
      cta: 'เยี่ยมชม',
    },
    process: {
      label1: 'กระบวนการ',
      label2: 'ของเรา',
      tagline: 'ตั้งแต่สถาปัตยกรรมจนถึงอินเทอร์เฟซ ทุกรายละเอียดออกแบบมาเพื่อความชัดเจน ประสิทธิภาพ และประสบการณ์ผู้ใช้ที่สมบูรณ์แบบ กระบวนการของเราผสมผสานความแม่นยำทางวิศวกรรมกับความคิดสร้างสรรค์ — เพื่อให้มั่นใจว่าทุกผลิตภัณฑ์ที่เราสร้างไม่เพียงแต่ใช้งานได้จริง แต่ยังใช้งานง่ายและขยายขนาดได้',
      discover: 'ค้นหา',
      design: 'ออกแบบ',
      develop: 'พัฒนา',
      deploy: 'ปรับใช้\n&\nสนับสนุน',
    },
    whyUs: {
      kicker: 'ทำไมต้องเรา',
      title: 'สร้างด้วยตรรกะ. ขัดเกลาด้วยการออกแบบ. ยั่งยืนด้วยความต่อเนื่อง.',
      desc: 'โครงสร้างพื้นฐานที่ไม่หยุดชะงัก UI ที่เน้นประสิทธิภาพ และงานฝีมือที่รองรับการเติบโต — ให้ผลิตภัณฑ์รู้สึกไร้ความพยายามในทุกโหลด',
      cta: 'ดูผลงาน',
    },
    footer: {
      tagline: 'ผสมผสานการออกแบบและวิศวกรรมเพื่อสร้างประสบการณ์ดิจิทัลที่ยั่งยืน เราสร้างเทคโนโลยีที่เติบโตพร้อมคุณ เชื่อถือได้ ปรับตัวได้ และพร้อมสำหรับอนาคต',
      about: 'เกี่ยวกับเรา',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อเรา',
      copyright: '© 2025 บริษัท ซีแมนส์ เทค จำกัด สงวนสิทธิ์ทั้งหมด',
    },
    contact: {
      heading: 'โค้ดที่ดีเกิดขึ้น\nเมื่อคนที่ใช่ได้คุยกัน.',
      addressLabel: 'ที่อยู่',
      contactLabel: 'ติดต่อ',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
})
