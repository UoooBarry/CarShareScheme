<template>
  <header>
    <nav class="navbar navbar-light navbar-expand-md navbar-transparency">
        <div class="container">
            <div><a class="navbar-brand" href="/about">PBD Car Share</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div class="collapse navbar-collapse"
                id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Search</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" href="#">Car list</a></li>
                   
                    <li class="nav-item" role="presentation" id="login" style="display: none"><a class="nav-link" href="/">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: "AdminHeader"

};
</script>