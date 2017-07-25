describe('vue アプリのテスト', function() {
    it('has a created hook', function() {
        expect(typeof app.$data).toBe('object');
    });
    it('vueコンポーネントのdata検証', function() {
        expect(app.$data.message).toBe('Hello ');
        expect(app.$data.name).toBe("");
    });
    it('vueコンポーネントのmethods検証', function() {
        expect(app.$data.name).toBe("");
        app.greet()
        expect(app.$data.name).toBe('Vue!');
    });
});
