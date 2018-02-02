const item = `<title>
VKS bác đề nghị 'xếp 14 tỷ đồng vào vali' của ông Trịnh Xuân Thanh
</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/tin-tuc/phap-luat/vks-bac-de-nghi-xep-14-ty-dong-vao-vali-cua-ong-trinh-xuan-thanh-3707494.html"><img width=130 height=100 src="https://i-vnexpress.vnecdn.net/2018/02/02/trinhxuanthanh-1517569380_180x108.jpg" ></a></br>VKS cho hay có nhiều lời khai về việc ông Thanh nhận vali 14 tỷ đồng nên không cần phải thực nghiệm việc "xếp lại tiền xem vừa không".
]]>
</description>
<pubDate>Fri, 02 Feb 2018 18:06:12 +0700</pubDate>
<link>
https://vnexpress.net/tin-tuc/phap-luat/vks-bac-de-nghi-xep-14-ty-dong-vao-vali-cua-ong-trinh-xuan-thanh-3707494.html
</link>
<guid>
https://vnexpress.net/tin-tuc/phap-luat/vks-bac-de-nghi-xep-14-ty-dong-vao-vali-cua-ong-trinh-xuan-thanh-3707494.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

function getBody(str, pre, post) {
    const startIndex = str.indexOf(pre) + pre.length;
    const endIndex = str.indexOf(post);
    return str.substring(startIndex, endIndex).trim();
}

function getTinFromItemString(str) {
    const title = getBody(item, '<title>', '</title>');
    const link = getBody(item, '<link>', '</link>');
    const description = getBody(item, '</a></br>', ']]>');
    const image = getBody(item, 'src="', '" ></a></br>');
    const id = link.substr(link.length - 12, 7);
}

getTinFromItemString(item);
