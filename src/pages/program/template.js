import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `

  `

  return (
    <>
      <a href='https://juejin.cn/post/6844904093467541517'>参考网址1</a><br/>
      <hr/>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



/*
<ul id="name_list"></ul>

<script type="text/html" id="user_tmpl">
    <%for ( var i = 0; i < users.length; i++ ) { %>
        <li>
            <a href="<%=users[i].url%>">
                <%=users[i].name%>
            </a>
        </li>
    <% } %>
</script>
*/