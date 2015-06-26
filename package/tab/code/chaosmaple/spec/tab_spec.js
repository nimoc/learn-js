describe('Tab Plugin test', function() {
    beforeEach(function() {
        //get fixtures
        var fixtures = jasmine.getFixtures()
        fixtures.fixturesPath = 'base/spec/fixtures'
        fixtures.load('fixture.html')

        //init tab
        tab({
            element: '.tab-wrap',
            triggers: '.tab-trigger',
            contents: '.tab-pane',
            activeIndex: 1
        })
    })


    describe('step01', function() {
        it('tab should be define', function() {
            expect(tab).toBeDefined()
        })

        it('active tab nav should have the right class', function() {
            var elem = $('[href=#home]')
            elem.trigger('click')
            expect(elem.parent()).toHaveClass('active')
        })
    })

    describe('step02', function() {
        it('tab should can be switch to 1', function() {
            $('[href=#home]').trigger('click')
            expect($('#home')).toBeVisible()
        })

        it('the other should be hidden', function() {
            $('[href=#home]').trigger('click')
            $('[href=#profile]').trigger('click')
            expect($('#home')).toBeHidden()
        })
    })

    describe('step03', function() {
        it('initialized tab should can auto show the right content', function() {
            expect($('[href=#profile]').parent()).toHaveClass('active')
            expect($('#profile')).toBeVisible()
        })
    })
})

describe('Tab Plugin test 2', function() {
    beforeEach(function() {
        //get fixtures
        var fixtures = jasmine.getFixtures()
        fixtures.fixturesPath = 'base/spec/fixtures'
        fixtures.load('fixture.html')
    })

    describe('step04', function() {
        it('should set the trigger type', function() {
            //init tab
            tab({
                element: '.tab-wrap',
                triggers: '.tab-trigger',
                contents: '.tab-pane',
                triggerType: 'hover'
            })
            $('[href=#demo]').trigger('mouseover')
            expect($('#demo')).toBeVisible()
        })
    })
    
    describe('step05', function() {
        it('should test the hook callback', function() {
            var index, count
            tab({
                element: '.tab-wrap',
                onSwitch: function(i, c) {
                    index = i
                    count = c
                }
            })
            $('[href=#profile]').trigger('click')
            expect($('.tab-pane').eq(index)).toBeVisible()
            expect($('.tab-nav')[0].childElementCount).toBe(count)
        })
    })
})