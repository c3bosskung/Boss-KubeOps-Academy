- HttpMethod Get กับ Post ต่างกันอย่างไร และควรใช้แต่ละตัวในกรณีไหนบ้าง ถึงจะเหมาะสม จงตอบคำถามพร้อมอธิบายอย่างละเอียด
Ans: Get กับ Post สามารถใช้เป็๋น HttpMethod ในการส่งข้อมูลได้เหมือนกัน เพียงแต่ 
    - Method Get อาจจะใช้ในการส่งข้อมูลที่ไม่สนใจในเรื่องความเป็นส่วนตัวในข้อมูล Method Get จะส่งข้อมูลไปพร้อมกับ URL ที่ Request ไปยังฝั่ง Server ทำให้สามารถเห็น parameter ต่างๆ ผ่านตัว URL ได้เลย เช่น การกดเข้า link ต่างๆส่วนใหญ่จะเป็น Method Get

    - Method Post จะสนใจด้านความเป็นส่วนตัวในการส่งข้อมูลขึ้นมาจาก Method Get ในตัว Method Get การส่ง Request ที่มี Parameter ต่างๆ user จะสามารถเห็นได้เลยผ่าน URL แต่ Method Post จะทำให้ซ่อน Parameter ไม่ให้เห็นใน URL แต่ไปเก็บ Parameter ไว้ในตัวของ Header ของ request ที่ส่งไปยัง Server แทน เช่น การใส่ Password ลงในหน้าและส่งไปยัง Server ก็จะใช้ Method Post เป็นความ Secure ของ user ที่มากยิ่งขึ้น
    